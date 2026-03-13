"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getCalendarGrid, formatDate, getCategoryColor, getLectureDatesInMonth } from "@/lib/calendar";
import { CalendarEvent, Lecture } from "@/types";

const SAMPLE_EVENTS: CalendarEvent[] = [
  { id: "1", title: "〇〇社 説明会", date: "2026-03-06", category: "job" },
  { id: "2", title: "一次面接", date: "2026-03-13", category: "job" },
  { id: "3", title: "友人と食事", date: "2026-03-16", category: "private" },
];

const SAMPLE_LECTURES: Lecture[] = [
  { id: "1", name: "線形代数", dayOfWeek: "mon", period: 1 },
  { id: "2", name: "プログラミング", dayOfWeek: "tue", period: 2 },
  { id: "3", name: "英語", dayOfWeek: "wed", period: 3 },
  { id: "4", name: "データ構造", dayOfWeek: "thu", period: 1 },
  { id: "5", name: "統計学", dayOfWeek: "fri", period: 2 },
];

const WEEKDAYS = ["月", "火", "水", "木", "金", "土", "日"];

export default function CalendarView() {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());

  const grid = getCalendarGrid(year, month);
  const lectureDates = getLectureDatesInMonth(year, month, SAMPLE_LECTURES);

  const prevMonth = () => {
    if (month === 0) { setYear(y => y - 1); setMonth(11); }
    else setMonth(m => m - 1);
  };
  const nextMonth = () => {
    if (month === 11) { setYear(y => y + 1); setMonth(0); }
    else setMonth(m => m + 1);
  };

  const getEventsForDate = (date: Date) => {
    const key = formatDate(date);
    return SAMPLE_EVENTS.filter(e => e.date === key);
  };

  const getLecturesForDate = (date: Date) => {
    const key = formatDate(date);
    return lectureDates.filter(l => l.date === key).map(l => l.lecture);
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <Button variant="outline" size="icon" onClick={prevMonth}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <h2 className="text-xl font-bold">{year}年 {month + 1}月</h2>
        <Button variant="outline" size="icon" onClick={nextMonth}>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="grid grid-cols-7 mb-1">
        {WEEKDAYS.map(day => (
          <div key={day} className="text-center text-sm font-medium text-gray-500 py-1">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 border-l border-t">
        {grid.map((date, i) => {
          const isToday = date && formatDate(date) === formatDate(today);
          const events = date ? getEventsForDate(date) : [];
          const lectures = date ? getLecturesForDate(date) : [];
          return (
            <div key={i} className="border-r border-b min-h-[90px] p-1">
              {date && (
                <>
                  <span className={`text-sm inline-flex items-center justify-center w-6 h-6 rounded-full ${isToday ? "bg-blue-600 text-white font-bold" : "text-gray-700"}`}>
                    {date.getDate()}
                  </span>
                  <div className="mt-1 space-y-0.5">
                    {lectures.map(lecture => (
                      <a key={lecture.id} href="/timetable" className="block text-xs px-1 rounded truncate bg-orange-400 text-white hover:bg-orange-500">
                        {lecture.name}
                      </a>
                    ))}
                    {events.map(event => (
                      <div key={event.id} className={`text-xs px-1 rounded truncate ${getCategoryColor(event.category)}`}>
                        {event.title}
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex gap-4 mt-3 text-xs text-gray-600">
        <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-blue-500 inline-block"/>就活</span>
        <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-green-500 inline-block"/>プライベート</span>
        <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-orange-400 inline-block"/>講義</span>
      </div>
    </div>
  );
}