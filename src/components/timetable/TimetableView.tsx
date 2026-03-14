"use client";

import { useState, useEffect } from "react";
import { Lecture, DayOfWeek } from "@/types";
import LectureModal from "./LectureModal";

const DAYS: { key: DayOfWeek; label: string }[] = [
  { key: "mon", label: "月" },
  { key: "tue", label: "火" },
  { key: "wed", label: "水" },
  { key: "thu", label: "木" },
  { key: "fri", label: "金" },
];

const PERIODS = [1, 2, 3, 4, 5];

export default function TimetableView() {
  const [lectures, setLectures] = useState<Lecture[]>([]);
  const [openId, setOpenId] = useState<string | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newLecture, setNewLecture] = useState<{
    name: string; dayOfWeek: DayOfWeek; period: number;
    memo: string; assignment: string; assignmentDeadline: string;
  }>({ name: "", dayOfWeek: "mon", period: 1, memo: "", assignment: "", assignmentDeadline: "" });
  const [loading, setLoading] = useState(true);
  const [selectedLecture, setSelectedLecture] = useState<Lecture | null>(null);

  // データ取得
  useEffect(() => {
    fetch("/api/lectures")
      .then(r => r.json())
      .then(data => { setLectures(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const getLecture = (day: DayOfWeek, period: number) =>
    lectures.find(l => l.dayOfWeek === day && l.period === period);

  // 講義追加
  const addLecture = async () => {
    if (!newLecture.name) return;
    const res = await fetch("/api/lectures", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...newLecture,
        memo: newLecture.memo || null,
        assignment: newLecture.assignment || null,
        assignmentDeadline: newLecture.assignmentDeadline || null,
      }),
    });
    const created = await res.json();
    setLectures(prev => [...prev, created]);
    setNewLecture({ name: "", dayOfWeek: "mon", period: 1, memo: "", assignment: "", assignmentDeadline: "" });
    setShowAddForm(false);
  };

  // 講義削除
  const deleteLecture = async (id: string) => {
    await fetch(`/api/lectures/${id}`, { method: "DELETE" });
    setLectures(prev => prev.filter(l => l.id !== id));
  };

  if (loading) return <div className="p-4 text-gray-400">読み込み中...</div>;

  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800">時間割</h2>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="text-sm bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
        >
          ＋ 講義追加
        </button>
      </div>

      {/* 講義追加フォーム */}
      {showAddForm && (
        <div className="mb-4 p-3 border rounded-lg bg-gray-50 flex flex-wrap gap-2 items-end">
          <div>
            <label className="text-xs text-gray-500 block mb-1">講義名</label>
            <input type="text" value={newLecture.name}
              onChange={e => setNewLecture(p => ({ ...p, name: e.target.value }))}
              className="border rounded px-2 py-1 text-sm w-32 text-black" placeholder="例：線形代数" />
          </div>
          <div>
            <label className="text-xs text-gray-500 block mb-1">曜日</label>
            <select value={newLecture.dayOfWeek}
              onChange={e => setNewLecture(p => ({ ...p, dayOfWeek: e.target.value as DayOfWeek }))}
              className="border rounded px-2 py-1 text-sm text-black">
              {DAYS.map(d => <option key={d.key} value={d.key}>{d.label}</option>)}
            </select>
          </div>
          <div>
            <label className="text-xs text-gray-500 block mb-1">時限</label>
            <select value={newLecture.period}
              onChange={e => setNewLecture(p => ({ ...p, period: Number(e.target.value) }))}
              className="border rounded px-2 py-1 text-sm text-black">
              {PERIODS.map(p => <option key={p} value={p}>{p}限</option>)}
            </select>
          </div>
          <div>
            <label className="text-xs text-gray-500 block mb-1">メモ</label>
            <input type="text" value={newLecture.memo}
              onChange={e => setNewLecture(p => ({ ...p, memo: e.target.value }))}
              className="border rounded px-2 py-1 text-sm w-28 text-black" placeholder="任意" />
          </div>
          <div>
            <label className="text-xs text-gray-500 block mb-1">課題</label>
            <input type="text" value={newLecture.assignment}
              onChange={e => setNewLecture(p => ({ ...p, assignment: e.target.value }))}
              className="border rounded px-2 py-1 text-sm w-28 text-black" placeholder="任意" />
          </div>
          <div>
            <label className="text-xs text-gray-500 block mb-1">期限</label>
            <input type="date" value={newLecture.assignmentDeadline}
              onChange={e => setNewLecture(p => ({ ...p, assignmentDeadline: e.target.value }))}
              className="border rounded px-2 py-1 text-sm text-black" />
          </div>
          <div className="flex gap-1">
            <button onClick={addLecture} className="text-xs bg-blue-500 text-white px-3 py-1.5 rounded hover:bg-blue-600">保存</button>
            <button onClick={() => setShowAddForm(false)} className="text-xs bg-gray-300 px-3 py-1.5 rounded">キャンセル</button>
          </div>
        </div>
      )}

      {/* 時間割テーブル */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse min-w-[400px]">
          <thead>
            <tr>
              <th className="border bg-gray-50 px-2 py-2 text-xs text-gray-500 w-10">限</th>
              {DAYS.map(d => (
                <th key={d.key} className="border bg-gray-50 px-2 py-2 text-sm font-medium text-gray-700">
                  {d.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {PERIODS.map(period => (
              <tr key={period}>
                <td className="border bg-gray-50 text-center text-xs font-medium py-2 text-gray-500">
                  {period}
                </td>
                {DAYS.map(day => {
                  const lecture = getLecture(day.key, period);
                  return (
                    <td key={day.key} className="border p-1 align-top">
                      {lecture ? (
                        <div>
                          <button
                            onClick={() => setSelectedLecture(lecture)}
                            className="w-full text-left bg-orange-50 border border-orange-200 hover:bg-orange-100 rounded px-2 py-1.5 text-xs font-medium text-orange-800 transition-colors"
                          >
                            <div className="truncate">{lecture.name}</div>
                            <div className="text-orange-400 text-right">{openId === lecture.id ? "▲" : "▼"}</div>
                          </button>
                          {openId === lecture.id && (
                            <div className="mt-1 p-2 bg-white border border-gray-100 rounded shadow-sm text-xs space-y-1.5">
                              <div className="flex gap-1">
                                <span className="text-gray-400 shrink-0">メモ</span>
                                <span className="text-gray-700">{lecture.memo || "なし"}</span>
                              </div>
                              <div className="flex gap-1">
                                <span className="text-gray-400 shrink-0">課題</span>
                                <span className="text-gray-700">{lecture.assignment || "なし"}</span>
                              </div>
                              {lecture.assignmentDeadline && (
                                <div className="flex gap-1">
                                  <span className="text-gray-400 shrink-0">期限</span>
                                  <span className="text-red-500 font-medium">{lecture.assignmentDeadline}</span>
                                </div>
                              )}
                              <button
                                onClick={() => deleteLecture(lecture.id)}
                                className="text-xs text-red-400 hover:text-red-600 mt-1"
                              >削除</button>
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="min-h-[40px]" />
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selectedLecture && (
      <LectureModal
        lecture={selectedLecture}
        onClose={() => setSelectedLecture(null)}
        onUpdated={(updated) => {
          setLectures(prev => prev.map(l => l.id === updated.id ? updated : l));
          setSelectedLecture(null);
        }}
        onDeleted={async (id) => {
          await deleteLecture(id);
          setSelectedLecture(null);
        }}
      />
    )}
    </div>
  );
}