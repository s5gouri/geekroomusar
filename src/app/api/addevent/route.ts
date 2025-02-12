import connectdb from "@/db/connection";
import EVENT from "@/Model/EventModel";
import { NextResponse } from "next/server";
connectdb();
export async function POST(req: Request) {
  const data = await req.formData();

  const desc = data.get("description");
  const header = data.get("header");
  const Heading = data.get("Heading");
  const images = JSON.parse(data.get("images") as string);
  const startDate = data.get("start");
  const Numb = data.get("Numb");
  const endDate = data.get("end");
  const event = await EVENT.create({
    start: startDate,
    end: endDate,
    title: Heading,
    num: Numb,
    description: desc,
    carousel: images,
    coverImage: header,
  });
  console.log(event);
  return NextResponse.json({ success: true, msg: "Data received" });
}
