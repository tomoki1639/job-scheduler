"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getCalendarGrid, formatDate, getCategoryColor, getLectureDatesInMonth } from "@/lib/calendar";
import { CalendarEvent, Lecture, EventCategory } from "@/types";

const WEEKDAYS = ["月", "火", "水", "木", "金", "土", "日"];

export default function CalendarView() {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [lectures, setLectures] = useState<Lecture[]>([]);
  const [showAddEvent, setShowAddEvent] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: "", date: "", category: "job" as EventCategory });

  const grid = getCalendarGrid(year, month);
  const lectureDates = getLectureDatesInMonth(year, month, lectures);

  // データ取得
  useEffect(() => {
    fetch("/api/events").then(r => r.json()).then(setEvents);
    fetch("/api/lectures").then(r => r.json()).then(setLectures);
  }, []);

  const prevMonth = () => {
    if (month === 0) { setYear(y => y - 1); setMonth(11); }
    else setMonth(m => m - 1);
  };
  const nextMonth = () => {
    if (month === 11) { setYear(y => y + 1); setMonth(0); }
    else setMonth(m => m + 1);
  };

  const getEventsForDate = (date: Date) =>
    events.filter(e => e.date === formatDate(date));

  const getLecturesForDate = (date: Date) =>
    lectureDates.filter(l => l.date === formatDate(date)).map(l => l.lecture);

  // イベント追加
  const addEvent = async () => {
    if (!newEvent.title || !newEvent.date) return;
    const res = await fetch("/api/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newEvent),
    });
    const created = await res.json();
    setEvents(prev => [...prev, created]);
    setNewEvent({ title: "", date: "", category: "job" });
    setShowAddEvent(false);
  };

  // イベント削除
  const deleteEvent = async (id: string) => {
    await fetch(`/api/events/${id}`, { method: "DELETE" });
    setEvents(prev => prev.filter(e => e.id !== id));
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-4">
      {/* ヘッダー */}
      <div className="flex items-center justify-between mb-4">
        <Button variant="outline" size="icon" onClick={prevMonth}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <h2 className="text-xl font-bold text-gray-800">{year}年 {month + 1}月</h2>
        <Button variant="outline" size="icon" onClick={nextMonth}>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* イベント追加ボタン */}
      <div className="mb-3">
        <button
          onClick={() => setShowAddEvent(!showAddEvent)}
          className="text-sm bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
        >
          ＋ イベント追加
        </button>

        {showAddEvent && (
          <div className="mt-2 p-3 border rounded-lg bg-gray-50 flex flex-wrap gap-2 items-end">
            <div>
              <label className="text-xs text-gray-500 block mb-1">タイトル</label>
              <input
                type="text"
                value={newEvent.title}
                onChange={e => setNewEvent(prev => ({ ...prev, title: e.target.value }))}
                className="border rounded px-2 py-1 text-sm w-40"
                placeholder="例：〇〇社 説明会"
              />
            </div>
            <div>
              <label className="text-xs text-gray-500 block mb-1">日付</label>
              <input
                type="date"
                value={newEvent.date}
                onChange={e => setNewEvent(prev => ({ ...prev, date: e.target.value }))}
                className="border rounded px-2 py-1 text-sm"
              />
            </div>
            <div>
              <label className="text-xs text-gray-500 block mb-1">カテゴリ</label>
              <select
                value={newEvent.category}
                onChange={e => setNewEvent(prev => ({ ...prev, category: e.target.value as EventCategory }))}
                className="border rounded px-2 py-1 text-sm"
              >
                <option value="job">就活</option>
                <option value="private">プライベート</option>
              </select>
            </div>
            <div className="flex gap-1">
              <button onClick={addEvent} className="text-xs bg-blue-500 text-white px-3 py-1.5 rounded hover:bg-blue-600">保存</button>
              <button onClick={() => setShowAddEvent(false)} className="text-xs bg-gray-300 px-3 py-1.5 rounded hover:bg-gray-400">キャンセル</button>
            </div>
          </div>
        )}
      </div>

      {/* 曜日ヘッダー */}
      <div className="grid grid-cols-7 mb-1">
        {WEEKDAYS.map((day, i) => (
          <div key={day} className={`text-center text-xs font-medium py-1
            ${i === 5 ? "text-blue-400" : i === 6 ? "text-red-400" : "text-gray-500"}`}>
            {day}
          </div>
        ))}
      </div>

      {/* 日付グリッド */}
      <div className="grid grid-cols-7 border-l border-t">
        {grid.map((date, i) => {
          const isToday = date && formatDate(date) === formatDate(today);
          const isSat = i % 7 === 5;
          const isSun = i % 7 === 6;
          const dayEvents = date ? getEventsForDate(date) : [];
          const dayLectures = date ? getLecturesForDate(date) : [];
          return (
            <div key={i} className={`border-r border-b min-h-[90px] p-1 ${!date ? "bg-gray-50" : "bg-white"}`}>
              {date && (
                <>
                  <span className={`text-xs inline-flex items-center justify-center w-6 h-6 rounded-full
                    ${isToday ? "bg-blue-600 text-white font-bold" : isSat ? "text-blue-400" : isSun ? "text-red-400" : "text-gray-700"}`}>
                    {date.getDate()}
                  </span>
                  <div className="mt-0.5 space-y-0.5">
                    {dayLectures.map(lecture => (
                      <a key={lecture.id} href="/timetable" className="block text-xs px-1 rounded truncate bg-orange-400 text-white hover:bg-orange-500">
                        {lecture.name}
                      </a>
                    ))}
                    {dayEvents.map(event => (
                      <div
                        key={event.id}
                        className={`text-xs px-1 rounded truncate flex items-center justify-between group ${getCategoryColor(event.category as EventCategory)}`}
                      >
                        <span className="truncate">{event.title}</span>
                        <button
                          onClick={() => deleteEvent(event.id)}
                          className="hidden group-hover:inline text-white opacity-70 hover:opacity-100 ml-1"
                        >✕</button>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>

      {/* 凡例 */}
      <div className="flex flex-wrap gap-3 mt-3 text-xs text-gray-500">
        <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-blue-500 inline-block"/>就活</span>
        <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-green-500 inline-block"/>プライベート</span>
        <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-orange-400 inline-block"/>講義</span>
      </div>
    </div>
  );
}