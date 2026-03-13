import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const events = await prisma.calendarEvent.findMany({
      orderBy: { date: "asc" },
    });
    return NextResponse.json(events);
  } catch (error) {
    return NextResponse.json({ error: "取得失敗" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { title, date, category, description } = await request.json();
    const event = await prisma.calendarEvent.create({
      data: { title, date, category, description },
    });
    return NextResponse.json(event);
  } catch (error) {
    return NextResponse.json({ error: "作成失敗" }, { status: 500 });
  }
}