import connectdb from "@/db/connection";
import EVENT from "@/Model/EventModel";
import { NextResponse } from "next/server";
connectdb();
export async function GET() {
  const events = await EVENT.find();
  return NextResponse.json({ success: true, events });
}
