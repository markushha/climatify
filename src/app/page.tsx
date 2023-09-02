"use client";

import LineChart from "@/components/common/charts/line-chart";
import Lottie from "react-lottie";
import animationData from "@/lotties/earth.json";
import Link from "next/link";

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Индекс AQI в Алматы",
      data: [33, 23, 51, 31, 44, 25],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
      tension: 0.4,
    },
    {
      label: "Индекс AQI в USA",
      data: [10, 63, 10, 51, 12, 45],
      fill: true,
      backgroundColor: "rgba(139, 92, 246, 0.4)",
      borderColor: "#8b5cf6",
      tension: 0.2,
    },
  ],
};

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function Home() {
  return (
    <div className="flex w-full flex-col items-center justify-center my-16">
      {/* <Lottie options={defaultOptions} /> */}
      <h2 className="text-5xl md:text-6xl font-semibold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-sky-500">
        Climatify
      </h2>
      <h2 className="text-lg tracking-tight sm:text-2xl md:text-3xl text-center">
        платформа для решения климатических проблем
        <br />
        используя ИИ
      </h2>
      <div className="flex flex-col items-center justify-center mt-16 md:w-[60%]">
        <p className="my-4 text-lg md:text-xl tracking-tight">
          Индекс загрязнения воздуха {"(AQI)"} в вашем городе
        </p>
        <LineChart about="AQI Index" data={data} />
      </div>
    </div>
  );
}
