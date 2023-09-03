"use client";

import { useEffect, useState } from "react";

import { AqiResponse } from "@/types/aqiResponse";

import LineChart from "@/components/common/charts/line-chart";
import axios from "axios";

export default function Home() {
  const [data, setData] = useState<AqiResponse>();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(true);

  const fetchAQI = async () => {
    try {
      setLoading(true);
      const response = (await axios.get('/api/aqi')) as any;
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

  // const fetchAiAQI = async () => {
  //   const response = fetch("https://8gb.n8n.lifalks.online/webhook/air", {
  //     method: "POST",
  //     mode: "no-cors",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ ip: "91.185.30.130" }),
  //   })
  //     .then((res) => console.log(res))
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // };

  const chartData = {
    labels: ["Вчера", "Сегодня", "Прогноз на завтра (ИИ)"],
    datasets: [
      {
        label: `Индекс AQI в ${data?.data.city}`,
        data: [46, data?.data.current.pollution.aqius, 37],
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

      {!loading && !error && (
        <div className="flex flex-col items-center justify-center mt-16 md:w-[60%]">
          <div className="md:flex  items-center justify-center">
            <p className="my-2 text-lg md:text-xl text-center tracking-tight">
              Индекс загрязнения воздуха {"(AQI)"} в {data?.data.city} сейчас
            </p>
            <div className="mx-auto md:mx-0 w-4 h-4 bg-rose-700 animate-pulse rounded-full md:ml-2 my-2 md:my-0" />
          </div>
          {/* <p className={cn("mb-4 -mt-1 font-semibold text-lg", aqiToCategory(data?.data.current.pollution.aqius!).color)}>{aqiToCategory(data?.data.current.pollution.aqius!).message}</p> */}
          <LineChart about="AQI Index" data={chartData} />
        </div>
      )}

      {error && (
        <div className="flex flex-col items-center justify-center w-full mt-16">
          <p className="text-lg text-center">Произошла ошибка</p>
          <p className="text-lg text-center">{error}</p>
        </div>
      )}

      {loading && (
        <div className="flex flex-col items-center justify-center w-full mt-16">
          <div className="w-[85%] my-2 h-4 rounded-lg bg-secondary animate-pulse" />
          <div className="w-[85%] my-4 h-4 rounded-lg bg-secondary animate-pulse" />
          <div className="w-[85%] h-96 rounded-lg bg-secondary animate-pulse" />
        </div>
      )}
    </div>
  );
}
