"use client";

import { useState } from "react";
import { Lecture, DayOfWeek } from "@/types";

const DAYS: { key: DayOfWeek; label: string }[] = [
  { key: "mon", label: "月" },
  { key: "tue", label: "火" },
  { key: "wed", label: "水" },
  { key: "thu", label: "木" },
  { key: "fri", label: "金" },
];

const PERIODS = [1, 2, 3, 4, 5];

// サンプルデータ（後でDBに置き換え）
const SAMPLE_LECTURES: Lecture[] = [
  { id: "1", name: "線形代数", dayOfWeek: "mon", period: 1, memo: "行列の計算", assignment: "演習問題3章", assignmentDeadline: "2026-03-20" },
  { id: "2", name: "プログラミング", dayOfWeek: "tue", period: 2, memo: "Reactの基礎", assignment: "課題アプリ作成", assignmentDeadline: "2026-03-25" },
  { id: "3", name: "英語", dayOfWeek: "wed", period: 3 },
  { id: "4", name: "データ構造", dayOfWeek: "thu", period: 1, memo: "木構造とグラフ" },
  { id: "5", name: "統計学", dayOfWeek: "fri", period: 2, assignment: "レポート提出", assignmentDeadline: "2026-03-18" },
];

export default function TimetableView() {
  const [openId, setOpenId] = useState<string | null>(null);

  const getLecture = (day: DayOfWeek, period: number) =>
    SAMPLE_LECTURES.find(l => l.dayOfWeek === day && l.period === period);

  const toggle = (id: string) => setOpenId(prev => prev === id ? null : id);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-xl font-bold mb-4">時間割</h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border bg-gray-100 px-3 py-2 text-sm w-12">限</th>
              {DAYS.map(d => (
                <th key={d.key} className="border bg-gray-100 px-3 py-2 text-sm">
                  {d.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {PERIODS.map(period => (
              <tr key={period}>
                <td className="border bg-gray-50 text-center text-sm font-medium py-2">
                  {period}限
                </td>
                {DAYS.map(day => {
                  const lecture = getLecture(day.key, period);
                  return (
                    <td key={day.key} className="border p-1 align-top min-w-[120px]">
                      {lecture ? (
                        <div>
                          <button
                            onClick={() => toggle(lecture.id)}
                            className="w-full text-left bg-orange-100 hover:bg-orange-200 rounded px-2 py-1 text-sm font-medium text-orange-800 transition-colors"
                          >
                            {lecture.name}
                            <span className="ml-1 text-xs">{openId === lecture.id ? "▲" : "▼"}</span>
                          </button>

                          {openId === lecture.id && (
                            <div className="mt-1 p-2 bg-white border rounded text-xs space-y-1">
                              <div>
                                <span className="font-medium text-gray-500">メモ：</span>
                                <span>{lecture.memo || "なし"}</span>
                              </div>
                              <div>
                                <span className="font-medium text-gray-500">課題：</span>
                                <span>{lecture.assignment || "なし"}</span>
                              </div>
                              {lecture.assignmentDeadline && (
                                <div>
                                  <span className="font-medium text-gray-500">期限：</span>
                                  <span className="text-red-600">{lecture.assignmentDeadline}</span>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="h-8" />
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}