"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function NavbarMenu({ className }: { className?: string }) {
  return (
    <NavigationMenu>
      <NavigationMenuList className={cn("gap-x-4}", className)}>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={cn("border-secondary border")}
          >
            AI Эколог
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[300px] lg:w-[400px] grid-cols-3">
              <li className="col-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-slate-800 to-slate-900 shadow-2xl p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      AI Эколог
                    </div>
                    <div className="flex items-center ">
                      <p className="text-sm leading-tight text-muted-foreground w-[90%]">
                        Наш онлайн чат-бот предоставляет точные данные касательно
                        климатеских изменений и экологической ситуации в вашем
                        городе
                      </p>
                      <ArrowRight className="ml-2 text-muted-foreground" size={24} />
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={cn("border-secondary border")}
          >
            Forest AI
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[300px] lg:w-[400px] lg:grid-cols-3">
              <li className="col-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-slate-800 to-slate-900 shadow-2xl p-6 no-underline outline-none focus:shadow-md"
                    href="/forest"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Вероятность лесных пожаров
                    </div>
                    <div className="flex items-center ">
                      <p className="text-sm leading-tight text-muted-foreground w-[90%]">
                        Наша платформа может предсказывать пожары по локациям. Мы используем ForestAPI - огромную AI модель, с малой веротностью ошибки
                      </p>
                      <ArrowRight className="ml-2 text-muted-foreground" size={24} />
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={cn("border-secondary border")}
          >
            AQI
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[300px] lg:w-[400px] lg:grid-cols-3">
              <li className="col-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-slate-800 to-slate-900 shadow-2xl p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      AQI Индекс
                    </div>
                    <div className="flex items-center ">
                      <p className="text-sm leading-tight text-muted-foreground w-[90%]">
                        Узнайте AQI индекс в своем городе в режиме реального времени и посмотрите прогноз AQI на ближайшие 7 дней
                      </p>
                      <ArrowRight className="ml-2 text-muted-foreground" size={24} />
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
