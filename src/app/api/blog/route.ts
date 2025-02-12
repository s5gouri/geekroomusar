import connectdb from "@/db/connection";
import EVENT from "@/Model/EventModel";

import { NextResponse } from "next/server";
connectdb();
export async function POST(req: Request) {
  const { blogNo } = await req.json();
  const event = await EVENT.findOne({ num: blogNo });
  // console.log(event);
  return NextResponse.json({ success: true, event });
}
