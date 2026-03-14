export type EventCategory = "job" | "private" | "lecture";

export interface CalendarEvent {
  id: string;
  title: string;
  date: string;
  category: EventCategory;
  description?: string;
  startTime?: string;
  endTime?: string;
  icon?: string;
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
  startTime?: string;
  endTime?: string;
  room?: string;
  teacher?: string;
  memo?: string;
  assignment?: string;
  assignmentDeadline?: string;
  attended?: boolean;
}

export interface ESQuestion {
  id: string;
  title: string;
  answer: string;
  maxLength?: number; 
}

export interface ESEntry {
  id: string;
  companyName: string;
  questions: ESQuestion[];
  createdAt: string;
}

export const ES_TEMPLATES = [
  { title: "志望動機", maxLength: 400 },
  { title: "自己PR", maxLength: 400 },
  { title: "学生時代に力を入れたこと（ガクチカ）", maxLength: 400 },
  { title: "将来のビジョン", maxLength: 300 },
  { title: "弊社を志望する理由", maxLength: 400 },
];