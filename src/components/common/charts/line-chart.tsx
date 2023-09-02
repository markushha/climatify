"use client";

import { Line } from "react-chartjs-2";

import Chart from 'chart.js/auto';
import {CategoryScale} from 'chart.js'; 
import { cn } from "@/lib/utils";

Chart.register(CategoryScale);

export default function LineChart({ data, className, about }: { data: any, className?: string, about?: string }) {
  return (
    <Line about={about} className={cn(className)} data={data} />
  )
}