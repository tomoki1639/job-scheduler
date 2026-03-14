import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const sessions = await prisma.lectureSession.findMany({
      where: { lectureId: id },
      orderBy: { sessionNum: "asc" },
    });
    return NextResponse.json(sessions);
  } catch (error) {
    return NextResponse.json({ error: "取得失敗" }, { status: 500 });
  }
}

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const { content, memo, materials, assignment, assignmentDeadline } = await request.json();

    const count = await prisma.lectureSession.count({ where: { lectureId: id } });
    const session = await prisma.lectureSession.create({
      data: {
        lectureId: id,
        sessionNum: count + 1,
        content,
        memo,
        materials,
      },
    });

    // 課題があればTODOに自動追加
    if (assignment && assignmentDeadline) {
      await prisma.todo.create({
        data: {
          title: `【課題】${assignment}`,
          date: assignmentDeadline,
          lectureId: id,
        },
      });
      await prisma.lecture.update({
        where: { id },
        data: { assignment, assignmentDeadline },
      });
    }

    return NextResponse.json(session);
  } catch (error) {
    return NextResponse.json({ error: "作成失敗" }, { status: 500 });
  }
}