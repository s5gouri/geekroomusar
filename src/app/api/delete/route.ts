import connectdb from "@/db/connection";
import EVENT from "@/Model/EventModel";
import { NextResponse } from "next/server";
connectdb();
export async function POST(req: Request) {
  const data = await req.json();
  console.log(data.num);
  await EVENT.deleteOne({ num: data.num });
  return NextResponse.json({ success: true, msg: "Data received" });
}
