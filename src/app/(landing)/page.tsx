"use client";

import { aqiClient } from "@/axios/client";
import LineChart from "@/components/common/charts/line-chart";
import { aqiToCategory } from "@/hooks/aqiToCategory";
import { cn } from "@/lib/utils";
import { AqiResponse } from "@/types/aqiResponse";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<AqiResponse>();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(true);

  const fetchAQI = async () => {
    try {
      setLoading(true);
      const response = (await aqiClient.get("/nearest_city")) as any;
      setData(response.data as AqiResponse);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err as any);
    }
  };

  useEffect(() => {
    fetchAQI();
  }, []);

  const chartData = {
    labels: ["Вчера", "Сегодня", "Прогноз на завтра (ИИ)"],
    datasets: [
      {
        label: `Индекс AQI в ${data?.data.city}`,
        data: [50, data?.data.current.pollution.aqius, 51],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        tension: 0.3,
      },
    ],
  };

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
      {!loading ? <div className="flex flex-col items-center justify-center mt-16 md:w-[60%]">
        <div className="flex items-center">
          <p className="my-2 text-lg md:text-xl tracking-tight">
            Индекс загрязнения воздуха {"(AQI)"} в {data?.data.city} сейчас
          </p>
          <div className="w-4 h-4 bg-rose-700 animate-pulse rounded-full ml-2" />
        </div>
        {/* <p className={cn("mb-4 -mt-1 font-semibold text-lg", aqiToCategory(data?.data.current.pollution.aqius!).color)}>{aqiToCategory(data?.data.current.pollution.aqius!).message}</p> */}
        <LineChart about="AQI Index" data={chartData} />
      </div> : (
        <div className="flex flex-col items-center justify-center w-full">
          <div className="w-1/2 my-2 h-4 rounded-lg bg-secondary animate-pulse" />
          <div className="w-1/2 my-4 h-4 rounded-lg bg-secondary animate-pulse" />
          <div className="w-1/2 h-96 rounded-lg bg-secondary animate-pulse" />
        </div>
      )}
    </div>
  );
}
