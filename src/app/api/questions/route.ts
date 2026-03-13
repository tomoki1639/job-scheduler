import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const { entryId, title, maxLength } = await request.json();
    const question = await prisma.eSQuestion.create({
      data: { entryId, title, maxLength },
    });
    return NextResponse.json(question);
  } catch (error) {
    return NextResponse.json({ error: "作成失敗" }, { status: 500 });
  }
}