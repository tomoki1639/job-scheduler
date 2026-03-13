import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await prisma.lecture.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "削除失敗" }, { status: 500 });
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const data = await request.json();
    const lecture = await prisma.lecture.update({
      where: { id },
      data,
    });
    return NextResponse.json(lecture);
  } catch (error) {
    return NextResponse.json({ error: "更新失敗" }, { status: 500 });
  }
}