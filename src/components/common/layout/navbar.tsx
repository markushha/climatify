"use client";

import { ModeToggle } from "../components/mode-toggle";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import Link from "next/link";

import NavbarMenu from "../components/navbar-menu";
import { Globe2 } from "lucide-react";
import { Button } from "@/components/ui/button";

type NavbarProps = {
  showLogo?: boolean;
};

export default function Navbar({ showLogo }: NavbarProps) {
  return (
    <header className="w-full border-b-[1px] dark:border-slate-800 border-slate-100">
      <nav className="py-4 sticky top-0 grid grid-cols-2 md:grid-cols-3 items-center mx-auto max-w-[90%] sm:max-w-[85%] md:max-w-[80%]">
        <div className="w-full flex items-center gap-y-4">
          <Link
            href="/"
            className="w-7 h-7 mr-2 rounded-full bg-gradient-to-r from-emerald-500 to-sky-500"
          />
          <div className="flex flex-col items-center justify-start">
            <Link
              href="/"
              className="mr-auto tracking-tight font-semibold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-sky-500"
            >
              Climatify
            </Link>
            <Link
              href="https://www.jumify.kz/ru"
              target="_blank"
              className=" mr-auto -mt-2 text-sm text-muted-foreground"
            >
              by Jumify
            </Link>
          </div>
        </div>
        <div className="md:flex hidden items-center justify-center">
          <NavbarMenu className="hidden md:flex" />
        </div>
        <div className="flex items-center justify-end gap-x-4">
          {/* <NavbarMenu className="md:hidden flex z-50" /> */}
          <Popover>
            <PopoverTrigger className="border border-secondary md:hidden flex rounded-lg hover:bg-secondary">
              <div className="p-2">
                <Globe2 className="h-6 w-6" />
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-fit mr-2 mt-4">
              <NavbarMenu className="md:hidden flex z-50" />
            </PopoverContent>
          </Popover>
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}
