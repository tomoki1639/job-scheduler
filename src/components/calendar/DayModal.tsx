"use client";

import { useState, useEffect } from "react";
import { X, Plus, Check } from "lucide-react";
import { formatDate } from "@/lib/calendar";
import { CalendarEvent, Lecture, EventCategory } from "@/types";

interface Todo {
  id: string;
  title: string;
  date: string;
  completed: boolean;
  lectureId?: string | null;
}

interface Props {
  date: Date;
  events: CalendarEvent[];
  lectures: Lecture[];
  onClose: () => void;
  onEventAdded: (event: CalendarEvent) => void;
  onEventDeleted: (id: string) => void;
}

const PERIOD_TIMES: Record<number, { start: number; startMin: number; end: number; endMin: number }> = {
  1: { start: 8, startMin: 30, end: 10, endMin: 0 },
  2: { start: 10, startMin: 20, end: 11, endMin: 50 },
  3: { start: 12, startMin: 40, end: 14, endMin: 10 },
  4: { start: 14, startMin: 30, end: 16, endMin: 0 },
  5: { start: 16, startMin: 20, end: 17, endMin: 50 },
};

const HOURS = Array.from({ length: 24 }, (_, i) => i);

export default function DayModal({ date, events, lectures, onClose, onEventAdded, onEventDeleted }: Props) {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");
  const [showAddEvent, setShowAddEvent] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: "",
    category: "job" as EventCategory,
    startTime: "",
    endTime: "",
  });
  const dateStr = formatDate(date);

  useEffect(() => {
    fetch(`/api/todos?date=${dateStr}`)
      .then(r => r.json())
      .then(data => Array.isArray(data) ? setTodos(data) : setTodos([]));
  }, [dateStr]);

  const addTodo = async () => {
    if (!newTodo.trim()) return;
    const res = await fetch("/api/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: newTodo, date: dateStr }),
    });
    const created = await res.json();
    setTodos(prev => [...prev, created]);
    setNewTodo("");
  };

  const toggleTodo = async (todo: Todo) => {
    const res = await fetch(`/api/todos/${todo.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !todo.completed }),
    });
    const updated = await res.json();
    setTodos(prev => prev.map(t => t.id === todo.id ? updated : t));
  };

  const deleteTodo = async (id: string) => {
    await fetch(`/api/todos/${id}`, { method: "DELETE" });
    setTodos(prev => prev.filter(t => t.id !== id));
  };

  const addEvent = async () => {
    if (!newEvent.title) return;
    const res = await fetch("/api/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: newEvent.title,
        date: dateStr,
        category: newEvent.category,
        startTime: newEvent.startTime || null,
        endTime: newEvent.endTime || null,
      }),
    });
    const created = await res.json();
    onEventAdded(created);
    setNewEvent({ title: "", category: "job", startTime: "", endTime: "" });
    setShowAddEvent(false);
  };

  const dateLabel = `${date.getMonth() + 1}月${date.getDate()}日（${"日月火水木金土"[date.getDay()]}）`;

  // タイムラインに表示するアイテムを時間でソート
  const timelineItems = [
    ...lectures.map(l => ({
      type: "lecture" as const,
      startHour: PERIOD_TIMES[l.period]?.start ?? 0,
      startMin: PERIOD_TIMES[l.period]?.startMin ?? 0,
      endHour: PERIOD_TIMES[l.period]?.end ?? 0,
      endMin: PERIOD_TIMES[l.period]?.endMin ?? 0,
      label: `📚 ${l.name}（${l.period}限）`,
      color: "text-orange-300",
    })),
    ...events
      .filter(e => e.startTime)
      .map(e => ({
        type: "event" as const,
        startHour: parseInt(e.startTime!.split(":")[0]),
        startMin: parseInt(e.startTime!.split(":")[1]),
        endHour: e.endTime ? parseInt(e.endTime.split(":")[0]) : parseInt(e.startTime!.split(":")[0]) + 1,
        endMin: e.endTime ? parseInt(e.endTime.split(":")[1]) : 0,
        label: e.title,
        color: e.category === "job" ? "text-blue-300" : "text-green-300",
        id: e.id,
      })),
  ].sort((a, b) => a.startHour !== b.startHour ? a.startHour - b.startHour : a.startMin - b.startMin);

  const allDayEvents = events.filter(e => !e.startTime);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center modal-overlay" onClick={onClose}>
      <div
        className="glass w-full max-w-3xl mx-4 max-h-[85vh] overflow-hidden flex flex-col"
        onClick={e => e.stopPropagation()}
        style={{ animation: "fadeInScale 0.2s ease" }}
      >
        {/* ヘッダー */}
        <div className="flex items-center justify-between p-5 border-b border-white/10">
          <h3 className="text-xl font-bold text-white">{dateLabel}</h3>
          <button onClick={onClose} className="text-white/50 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* コンテンツ */}
        <div className="flex flex-1 overflow-hidden">
          {/* 左: タイムライン */}
          <div className="w-1/2 border-r border-white/10 overflow-y-auto p-4">
            <h4 className="text-sm font-medium text-white/60 mb-3">📅 タイムライン</h4>
            {/* 終日イベント */}
            {allDayEvents.length > 0 && (
              <div className="mb-3 space-y-1">
                <p className="text-xs text-white/30 mb-1">終日</p>
                {allDayEvents.map(event => (
                  <div key={event.id} className={`glass-dark px-2 py-1 rounded-lg text-xs flex items-center justify-between
        ${event.category === "job" ? "text-blue-300" : "text-green-300"}`}>
                    <span>{event.title}</span>
                    <button
                      onClick={() => onEventDeleted(event.id)}
                      className="text-white/20 hover:text-red-400 ml-2 text-xs"
                    >✕</button>
                  </div>
                ))}
              </div>
            )}
            <div className="relative">
              {HOURS.map(hour => {
                const items = timelineItems.filter(item => item.startHour === hour);
                return (
                  <div key={hour} className="flex gap-2 min-h-[44px]">
                    <span className="text-xs text-white/30 w-10 shrink-0 pt-1">
                      {String(hour).padStart(2, "0")}:00
                    </span>
                    <div className="flex-1 border-t border-white/5 pt-1 space-y-1">
                      {items.map((item, i) => (
                        <div key={i} className={`glass-dark px-2 py-1 rounded-lg text-xs ${item.color} flex items-center justify-between group`}>
                          <span>{item.label}</span>
                          {item.type === "event" && (
                            <span className="text-white/20 text-xs">
                              {String(item.startHour).padStart(2, "0")}:{String(item.startMin).padStart(2, "0")} 〜 {String(item.endHour).padStart(2, "0")}:{String(item.endMin).padStart(2, "0")}
                            </span>
                          )}
                          {item.type === "lecture" && (
                            <span className="text-white/20 text-xs">
                              {String(item.startHour).padStart(2, "0")}:{String(item.startMin).padStart(2, "0")} 〜 {String(item.endHour).padStart(2, "0")}:{String(item.endMin).padStart(2, "0")}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* イベント追加 */}
            <div className="mt-4">
              {!showAddEvent ? (
                <button
                  onClick={() => setShowAddEvent(true)}
                  className="flex items-center gap-1 text-xs text-white/40 hover:text-white/70 transition-colors"
                >
                  <Plus className="h-3 w-3" /> イベント追加
                </button>
              ) : (
                <div className="glass-dark p-3 rounded-xl space-y-2">
                  <input
                    type="text"
                    value={newEvent.title}
                    onChange={e => setNewEvent(p => ({ ...p, title: e.target.value }))}
                    placeholder="イベント名"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-2 py-1.5 text-sm text-white placeholder-white/30"
                    autoFocus
                  />
                  <select
                    value={newEvent.category}
                    onChange={e => setNewEvent(p => ({ ...p, category: e.target.value as EventCategory }))}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-2 py-1.5 text-sm text-white"
                  >
                    <option value="job">就活</option>
                    <option value="private">プライベート</option>
                  </select>

                  {/* 終日 or 時間指定 切り替え */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => setNewEvent(p => ({ ...p, startTime: "", endTime: "" }))}
                      className={`flex-1 text-xs px-2 py-1.5 rounded-lg transition-colors
          ${!newEvent.startTime ? "bg-blue-500/60 text-white" : "bg-white/5 text-white/40 hover:bg-white/10"}`}
                    >
                      終日
                    </button>
                    <button
                      onClick={() => setNewEvent(p => ({ ...p, startTime: "09:00", endTime: "10:00" }))}
                      className={`flex-1 text-xs px-2 py-1.5 rounded-lg transition-colors
          ${newEvent.startTime ? "bg-blue-500/60 text-white" : "bg-white/5 text-white/40 hover:bg-white/10"}`}
                    >
                      時間指定
                    </button>
                  </div>

                  {/* 時間範囲選択（時間指定の場合のみ表示） */}
                  {newEvent.startTime !== undefined && newEvent.startTime !== "" && (
                    <div className="flex items-center gap-2">
                      <div className="flex-1">
                        <label className="text-xs text-white/40 block mb-1">開始時間</label>
                        <input
                          type="time"
                          value={newEvent.startTime}
                          onChange={e => setNewEvent(p => ({ ...p, startTime: e.target.value }))}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-2 py-1.5 text-sm text-white"
                        />
                      </div>
                      <span className="text-white/30 mt-4">〜</span>
                      <div className="flex-1">
                        <label className="text-xs text-white/40 block mb-1">終了時間</label>
                        <input
                          type="time"
                          value={newEvent.endTime}
                          onChange={e => setNewEvent(p => ({ ...p, endTime: e.target.value }))}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-2 py-1.5 text-sm text-white"
                        />
                      </div>
                    </div>
                  )}

                  <div className="flex gap-1">
                    <button onClick={addEvent} className="text-xs bg-blue-500/80 text-white px-3 py-1 rounded-lg hover:bg-blue-500">保存</button>
                    <button onClick={() => setShowAddEvent(false)} className="text-xs bg-white/10 text-white/60 px-3 py-1 rounded-lg">キャンセル</button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* 右: TODOリスト */}
          <div className="w-1/2 overflow-y-auto p-4">
            <h4 className="text-sm font-medium text-white/60 mb-3">✅ TODOリスト</h4>

            {lectures.filter(l => l.assignmentDeadline === dateStr).map(l => (
              <div key={l.id} className="glass-dark px-3 py-2 rounded-xl mb-2 text-xs">
                <span className="text-orange-300">📚 {l.name}</span>
                <p className="text-white/60 mt-0.5">{l.assignment}</p>
              </div>
            ))}

            <div className="space-y-2 mb-4">
              {todos.length === 0 && (
                <p className="text-white/30 text-xs">TODOはありません</p>
              )}
              {todos.map(todo => (
                <div key={todo.id} className={`flex items-center gap-2 glass-dark px-3 py-2 rounded-xl group transition-all ${todo.completed ? "opacity-50" : ""}`}>
                  <button
                    onClick={() => toggleTodo(todo)}
                    className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-colors
                      ${todo.completed ? "bg-green-500 border-green-500" : "border-white/30 hover:border-white/60"}`}
                  >
                    {todo.completed && <Check className="h-3 w-3 text-white" />}
                  </button>
                  <span className={`text-sm flex-1 ${todo.completed ? "line-through text-white/40" : "text-white"}`}>
                    {todo.title}
                  </span>
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="text-white/20 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-all text-xs"
                  >✕</button>
                </div>
              ))}
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                value={newTodo}
                onChange={e => setNewTodo(e.target.value)}
                onKeyDown={e => e.key === "Enter" && addTodo()}
                placeholder="TODOを追加..."
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-sm text-white placeholder-white/30"
              />
              <button onClick={addTodo} className="bg-blue-500/80 hover:bg-blue-500 text-white px-3 py-2 rounded-xl transition-colors">
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}