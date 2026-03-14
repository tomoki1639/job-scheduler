"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getCalendarGrid, formatDate, getLectureDatesInMonth } from "@/lib/calendar";
import { CalendarEvent, Lecture, EventCategory } from "@/types";
import DayModal from "./DayModal";

const WEEKDAYS = ["月", "火", "水", "木", "金", "土", "日"];

const CATEGORY_COLORS: Record<string, string> = {
  job: "bg-blue-500/80",
  private: "bg-green-500/80",
  lecture: "bg-orange-400/80",
};

export default function CalendarView() {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [lectures, setLectures] = useState<Lecture[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const grid = getCalendarGrid(year, month);
  const lectureDates = getLectureDatesInMonth(year, month, lectures);

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

  const handleEventAdded = (event: CalendarEvent) => {
    setEvents(prev => [...prev, event]);
  };

  const handleEventDeleted = (id: string) => {
    setEvents(prev => prev.filter(e => e.id !== id));
  };

  return (
    <>
      <div className="glass p-6">
        {/* ヘッダー */}
        <div className="flex items-center justify-between mb-6">
          <button onClick={prevMonth} className="glass-hover p-2 rounded-xl text-white/70 hover:text-white transition-colors">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <h2 className="text-2xl font-bold text-white">{year}年 {month + 1}月</h2>
          <button onClick={nextMonth} className="glass-hover p-2 rounded-xl text-white/70 hover:text-white transition-colors">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* 曜日ヘッダー */}
        <div className="grid grid-cols-7 mb-2">
          {WEEKDAYS.map((day, i) => (
            <div key={day} className={`text-center text-xs font-medium py-1
              ${i === 5 ? "text-blue-300" : i === 6 ? "text-red-300" : "text-white/50"}`}>
              {day}
            </div>
          ))}
        </div>

        {/* 日付グリッド */}
        <div className="grid grid-cols-7 gap-1">
          {grid.map((date, i) => {
            const isToday = date && formatDate(date) === formatDate(today);
            const isSat = i % 7 === 5;
            const isSun = i % 7 === 6;
            const dayEvents = date ? getEventsForDate(date) : [];
            const dayLectures = date ? getLecturesForDate(date) : [];
            const hasContent = dayEvents.length > 0 || dayLectures.length > 0;

            return (
              <div
                key={i}
                onClick={() => date && setSelectedDate(date)}
                className={`min-h-[80px] p-1.5 rounded-xl transition-all duration-200 cursor-pointer
                  ${!date ? "opacity-0 pointer-events-none" : ""}
                  ${date ? "glass-hover hover:scale-[1.02]" : ""}
                  ${isToday ? "ring-2 ring-blue-400/60 bg-blue-500/10" : ""}`}
              >
                {date && (
                  <>
                    <span className={`text-xs inline-flex items-center justify-center w-6 h-6 rounded-full font-medium mb-1
                      ${isToday ? "bg-blue-500 text-white" : isSat ? "text-blue-300" : isSun ? "text-red-300" : "text-white"}`}>
                      {date.getDate()}
                    </span>
                    <div className="space-y-0.5">
                      {dayLectures.slice(0, 1).map(lecture => (
                        <div key={lecture.id} className="text-xs px-1 py-0.5 rounded bg-orange-400/60 text-white truncate">
                          📚 {lecture.name}
                        </div>
                      ))}
                      {dayEvents.slice(0, 2).map(event => (
                        <div key={event.id} className={`text-xs px-1 py-0.5 rounded truncate text-white ${CATEGORY_COLORS[event.category] || "bg-gray-500/60"}`}>
                          {event.title}
                        </div>
                      ))}
                      {(dayLectures.length + dayEvents.length) > 3 && (
                        <div className="text-xs text-white/40 px-1">
                          +{dayLectures.length + dayEvents.length - 3}件
                        </div>
                      )}
                      {hasContent && (
                        <div className="flex gap-0.5 mt-1">
                          {dayLectures.length > 0 && <span className="w-1.5 h-1.5 rounded-full bg-orange-400 inline-block"/>}
                          {dayEvents.filter(e => e.category === "job").length > 0 && <span className="w-1.5 h-1.5 rounded-full bg-blue-400 inline-block"/>}
                          {dayEvents.filter(e => e.category === "private").length > 0 && <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block"/>}
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* 凡例 */}
        <div className="flex flex-wrap gap-4 mt-4 text-xs text-white/70">
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-blue-400 inline-block"/>就活</span>
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-green-400 inline-block"/>プライベート</span>
          <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-orange-400 inline-block"/>講義</span>
        </div>
      </div>

      {/* 日付モーダル */}
      {selectedDate && (
        <DayModal
          date={selectedDate}
          events={getEventsForDate(selectedDate)}
          lectures={getLecturesForDate(selectedDate)}
          onClose={() => setSelectedDate(null)}
          onEventAdded={handleEventAdded}
          onEventDeleted={handleEventDeleted}
        />
      )}
    </>
  );
}