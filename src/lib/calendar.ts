import { CalendarEvent } from "@/types";

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
  return date.toISOString().split("T")[0];
}

export function getCategoryColor(category: CalendarEvent["category"]): string {
  switch (category) {
    case "job":     return "bg-blue-500 text-white";
    case "private": return "bg-green-500 text-white";
    case "lecture": return "bg-orange-400 text-white";
  }
}