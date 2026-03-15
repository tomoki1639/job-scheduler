import { CalendarEvent, Lecture, DayOfWeek } from "@/types";

export function getCalendarGrid(year: number, month: number): (Date | null)[] {
  const days: Date[] = [];
  const date = new Date(year, month, 1);
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }

  const firstDayOfWeek = days[0].getDay();
  const offset = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;
  const grid: (Date | null)[] = [];

  for (let i = 0; i < offset; i++) grid.push(null);
  for (const day of days) grid.push(day);
  while (grid.length % 7 !== 0) grid.push(null);

  return grid;
}

export function formatDate(date: Date): string {
  const formatter = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Tokyo',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });
  return formatter.format(date).replace(/\//g, '-');
}

export function getCategoryColor(category: CalendarEvent["category"]): string {
  switch (category) {
    case "job":     return "bg-blue-500 text-white";
    case "private": return "bg-green-500 text-white";
    case "lecture": return "bg-orange-400 text-white";
  }
}

const DAY_MAP: Record<number, DayOfWeek> = {
  1: "mon", 2: "tue", 3: "wed", 4: "thu", 5: "fri",
};

export function getLectureDatesInMonth(
  year: number,
  month: number,
  lectures: Lecture[]
): { date: string; lecture: Lecture }[] {
  const results: { date: string; lecture: Lecture }[] = [];
  const d = new Date(year, month, 1);

  while (d.getMonth() === month) {
    const dayOfWeek = DAY_MAP[d.getDay()];
    if (dayOfWeek) {
      const matched = lectures.filter(l => l.dayOfWeek === dayOfWeek);
      for (const lecture of matched) {
        results.push({ date: formatDate(d), lecture });
      }
    }
    d.setDate(d.getDate() + 1);
  }

  return results;
}