import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const date = searchParams.get("date");
    const todos = await prisma.todo.findMany({
      where: date ? { date } : undefined,
      orderBy: { createdAt: "asc" },
    });
    return NextResponse.json(todos);
  } catch (error) {
    return NextResponse.json({ error: "取得失敗" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { title, date } = await request.json();
    const todo = await prisma.todo.create({
      data: { title, date },
    });
    return NextResponse.json(todo);
  } catch (error) {
    return NextResponse.json({ error: "作成失敗" }, { status: 500 });
  }
}