import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const companies = await prisma.company.findMany({
      include: { esEntries: { include: { questions: true } } },
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(companies);
  } catch (error) {
    return NextResponse.json({ error: "取得失敗" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { name } = await request.json();
    const company = await prisma.company.create({
      data: {
        name,
        esEntries: { create: { questions: { create: [] } } },
      },
      include: { esEntries: { include: { questions: true } } },
    });
    return NextResponse.json(company);
  } catch (error) {
    return NextResponse.json({ error: "作成失敗" }, { status: 500 });
  }
}