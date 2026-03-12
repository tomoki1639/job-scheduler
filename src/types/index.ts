export type EventCategory = "job" | "private" | "lecture";

export interface CalendarEvent {
  id: string;
  title: string;
  date: string;
  category: EventCategory;
  description?: string;
}

export type JobStatus =
  | "considering"
  | "es_submitted"
  | "written_passed"
  | "interviewing"
  | "offered"
  | "rejected";

export interface JobApplication {
  id: string;
  companyName: string;
  status: JobStatus;
  nextDeadline?: string;
  memo?: string;
}

export type DayOfWeek = "mon" | "tue" | "wed" | "thu" | "fri";

export interface Lecture {
  id: string;
  name: string;
  dayOfWeek: DayOfWeek;
  period: number;
  memo?: string;
  assignment?: string;
  assignmentDeadline?: string;
  attended?: boolean;
}