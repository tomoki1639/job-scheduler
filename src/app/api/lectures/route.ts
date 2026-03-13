import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const lectures = await prisma.lecture.findMany({
      orderBy: [{ dayOfWeek: "asc" }, { period: "asc" }],
    });
    return NextResponse.json(lectures);
  } catch (error) {
    return NextResponse.json({ error: "取得失敗" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { name, dayOfWeek, period, memo, assignment, assignmentDeadline } = await request.json();
    const lecture = await prisma.lecture.create({
      data: { name, dayOfWeek, period, memo, assignment, assignmentDeadline },
    });
    return NextResponse.json(lecture);
  } catch (error) {
    return NextResponse.json({ error: "作成失敗" }, { status: 500 });
  }
}