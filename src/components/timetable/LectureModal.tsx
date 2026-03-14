"use client";

import { useState, useEffect } from "react";
import { X, Plus, ChevronDown, ChevronUp } from "lucide-react";
import { Lecture } from "@/types";

interface Session {
  id: string;
  sessionNum: number;
  content?: string | null;
  memo?: string | null;
  materials?: string | null;
  createdAt: string;
}

interface Props {
  lecture: Lecture;
  onClose: () => void;
  onUpdated: (lecture: Lecture) => void;
  onDeleted: (id: string) => void;
}

const DAY_LABELS: Record<string, string> = {
  mon: "月", tue: "火", wed: "水", thu: "木", fri: "金",
};

export default function LectureModal({ lecture, onClose, onUpdated, onDeleted }: Props) {
  const [sessions, setSessions] = useState<Session[]>([]);
  const [openSessionId, setOpenSessionId] = useState<string | null>(null);
  const [showAddSession, setShowAddSession] = useState(false);
  const [newSession, setNewSession] = useState({
    content: "", memo: "", materials: "", assignment: "", assignmentDeadline: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/lectures/${lecture.id}/sessions`)
      .then(r => r.json())
      .then(data => { setSessions(Array.isArray(data) ? data : []); setLoading(false); });
  }, [lecture.id]);

  const addSession = async () => {
    const res = await fetch(`/api/lectures/${lecture.id}/sessions`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newSession),
    });
    const created = await res.json();
    setSessions(prev => [...prev, created]);
    setNewSession({ content: "", memo: "", materials: "", assignment: "", assignmentDeadline: "" });
    setShowAddSession(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center modal-overlay" onClick={onClose}>
      <div
        className="glass w-full max-w-2xl mx-4 max-h-[85vh] overflow-hidden flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* ヘッダー */}
        <div className="flex items-center justify-between p-5 border-b border-white/10">
          <div>
            <h3 className="text-xl font-bold text-white">{lecture.name}</h3>
            <p className="text-sm text-white/50 mt-0.5">
              {DAY_LABELS[lecture.dayOfWeek]}曜 {lecture.period}限
              {lecture.room && ` · ${lecture.room}`}
              {lecture.teacher && ` · ${lecture.teacher}`}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => onDeleted(lecture.id)}
              className="text-xs text-red-400 hover:text-red-300 px-2 py-1 rounded-lg hover:bg-red-500/10 transition-colors"
            >
              削除
            </button>
            <button onClick={onClose} className="text-white/50 hover:text-white p-1 rounded-lg hover:bg-white/10">
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* コンテンツ */}
        <div className="overflow-y-auto p-5 space-y-3">
          {/* 課題情報 */}
          {lecture.assignment && (
            <div className="glass-dark p-3 rounded-xl">
              <p className="text-xs text-white/50 mb-1">直近の課題</p>
              <p className="text-sm text-orange-300">{lecture.assignment}</p>
              {lecture.assignmentDeadline && (
                <p className="text-xs text-red-400 mt-1">期限: {lecture.assignmentDeadline}</p>
              )}
            </div>
          )}

          {/* 授業回数リスト */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-sm font-medium text-white/60">授業記録</h4>
              <button
                onClick={() => setShowAddSession(!showAddSession)}
                className="flex items-center gap-1 text-xs text-blue-300 hover:text-blue-200 transition-colors"
              >
                <Plus className="h-3 w-3" /> 第{sessions.length + 1}回を追加
              </button>
            </div>

            {/* 新規セッション追加フォーム */}
            {showAddSession && (
              <div className="glass-dark p-4 rounded-xl mb-3 space-y-2">
                <p className="text-xs text-white/50 font-medium">第{sessions.length + 1}回</p>
                <div>
                  <label className="text-xs text-white/40 block mb-1">学習内容</label>
                  <textarea
                    value={newSession.content}
                    onChange={e => setNewSession(p => ({ ...p, content: e.target.value }))}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-white/30 resize-none"
                    rows={2}
                    placeholder="今回の授業内容..."
                  />
                </div>
                <div>
                  <label className="text-xs text-white/40 block mb-1">メモ</label>
                  <textarea
                    value={newSession.memo}
                    onChange={e => setNewSession(p => ({ ...p, memo: e.target.value }))}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-white/30 resize-none"
                    rows={2}
                    placeholder="メモ..."
                  />
                </div>
                <div>
                  <label className="text-xs text-white/40 block mb-1">配布資料</label>
                  <input
                    type="text"
                    value={newSession.materials}
                    onChange={e => setNewSession(p => ({ ...p, materials: e.target.value }))}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-white/30"
                    placeholder="資料名..."
                  />
                </div>
                <div className="flex gap-2">
                  <div className="flex-1">
                    <label className="text-xs text-white/40 block mb-1">課題</label>
                    <input
                      type="text"
                      value={newSession.assignment}
                      onChange={e => setNewSession(p => ({ ...p, assignment: e.target.value }))}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-white/30"
                      placeholder="課題内容..."
                    />
                  </div>
                  <div>
                    <label className="text-xs text-white/40 block mb-1">期限</label>
                    <input
                      type="date"
                      value={newSession.assignmentDeadline}
                      onChange={e => setNewSession(p => ({ ...p, assignmentDeadline: e.target.value }))}
                      className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white"
                    />
                  </div>
                </div>
                <div className="flex gap-2 pt-1">
                  <button onClick={addSession} className="text-xs bg-blue-500/80 text-white px-4 py-1.5 rounded-lg hover:bg-blue-500">保存</button>
                  <button onClick={() => setShowAddSession(false)} className="text-xs bg-white/10 text-white/60 px-4 py-1.5 rounded-lg">キャンセル</button>
                </div>
              </div>
            )}

            {/* セッション一覧 */}
            {loading ? (
              <p className="text-white/30 text-xs">読み込み中...</p>
            ) : sessions.length === 0 ? (
              <p className="text-white/30 text-xs">授業記録がありません</p>
            ) : (
              <div className="space-y-2">
                {sessions.map(session => (
                  <div key={session.id} className="glass-dark rounded-xl overflow-hidden">
                    <button
                      className="w-full flex items-center justify-between px-4 py-3 text-left"
                      onClick={() => setOpenSessionId(prev => prev === session.id ? null : session.id)}
                    >
                      <span className="text-sm font-medium text-white">第{session.sessionNum}回</span>
                      <div className="flex items-center gap-2">
                        {session.content && (
                          <span className="text-xs text-white/40 truncate max-w-[150px]">{session.content}</span>
                        )}
                        {openSessionId === session.id
                          ? <ChevronUp className="h-4 w-4 text-white/40" />
                          : <ChevronDown className="h-4 w-4 text-white/40" />
                        }
                      </div>
                    </button>
                    {openSessionId === session.id && (
                      <div className="px-4 pb-4 space-y-2 border-t border-white/10 pt-3">
                        {session.content && (
                          <div>
                            <p className="text-xs text-white/40 mb-1">学習内容</p>
                            <p className="text-sm text-white/80">{session.content}</p>
                          </div>
                        )}
                        {session.memo && (
                          <div>
                            <p className="text-xs text-white/40 mb-1">メモ</p>
                            <p className="text-sm text-white/80">{session.memo}</p>
                          </div>
                        )}
                        {session.materials && (
                          <div>
                            <p className="text-xs text-white/40 mb-1">配布資料</p>
                            <p className="text-sm text-white/80">{session.materials}</p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}