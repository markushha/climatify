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
      <NavigationMenuList className={cn("", className)}>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={cn("border-secondary border")}
          >
            AI Эколог
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[300px] lg:w-[400px] grid-cols-2">
              <li className="col-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-slate-50 to-slate-200 dark:from-slate-800 dark:to-slate-900 shadow-2xl py-6 px-2 md:p-6 no-underline outline-none focus:shadow-md"
                    href="/chat"
                  >
                    <div className="mb-2 flex mt-4 text-lg items-center justify-center w-full font-medium">
                      <p>AI Эколог</p>
                      <ArrowRight className="ml-2 text-muted-foreground md:hidden flex" size={24} />
                    </div>
                    <div className="flex items-center ">
                      <p className="md:text-sm md:flex hidden leading-tight text-muted-foreground w-[90%]">
                        Наш онлайн чат-бот предоставляет точные данные касательно
                        климатеских изменений и экологической ситуации в вашем
                        городе
                      </p>
                      <ArrowRight className="ml-2 text-muted-foreground md:flex hidden" size={24} />
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* <NavigationMenuItem>
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
        </NavigationMenuItem> */}
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
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-slate-50 to-slate-200 dark:from-slate-800 dark:to-slate-900 shadow-2xl py-6 px-2 md:p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 flex mt-4 text-lg items-center justify-center w-full font-medium">
                      <p>AQI Индекс</p>
                      <ArrowRight className="ml-2 text-muted-foreground md:hidden flex" size={24} />
                    </div>
                    <div className="flex items-center ">
                      <p className="text-sm md:flex hidden leading-tight text-muted-foreground w-[90%]">
                        Узнайте AQI индекс в своем городе в режиме реального времени и посмотрите прогноз AQI на ближайшие 7 дней
                      </p>
                      <ArrowRight className="ml-2 text-muted-foreground md:flex hidden" size={24} />
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
