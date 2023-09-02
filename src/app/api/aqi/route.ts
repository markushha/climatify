//const response = (await aqiClient.get("/nearest_city")) as any;

import { aqiClient } from "@/axios/client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await aqiClient.get("/nearest_city");
    return NextResponse.json(response.data);
  } catch (e) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}