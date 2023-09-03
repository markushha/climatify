//const response = (await aqiClient.get("/nearest_city")) as any;

import { aqiClient } from "@/axios/client";
import { NextResponse } from "next/server";

import requestIp from 'request-ip';

export async function GET(req: any) {
  const detectedIp = requestIp.getClientIp(req);

  try {
    const response = await aqiClient.get("/nearest_city", {
      params: {
        ip: "95.56.248.140"
      }
    });
    return NextResponse.json(response.data);
  } catch (e) {
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}