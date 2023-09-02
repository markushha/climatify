"use client";

import { ModeToggle } from "../components/mode-toggle";
import Link from "next/link";
import NavbarMenu from "../components/navbar-menu";

type NavbarProps = {
  showLogo?: boolean;
};

export default function Navbar({ showLogo }: NavbarProps) {
  return (
    <header className="w-full border-b-[1px] dark:border-slate-800 border-slate-100">
      <nav className="py-4 sticky top-0 grid grid-cols-2 md:grid-cols-3 items-center mx-auto max-w-[90%] sm:max-w-[85%] md:max-w-[80%]">
        <Link href="/" className="w-full flex items-center gap-y-4">
          <div className="w-7 h-7 mr-2 rounded-full bg-gradient-to-r from-emerald-500 to-sky-500" />
          <div className="flex flex-col items-center justify-start">
            <h1 className="mr-auto tracking-tight font-semibold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-sky-500">
              Climatify
            </h1>
            <a
              href="https://www.jumify.kz/ru"
              target="_blank"
              className=" mr-auto -mt-2 text-sm text-muted-foreground"
            >
              by Jumify
            </a>
          </div>
        </Link>
        <div className="md:flex hidden items-center justify-center">
          <NavbarMenu className="hidden md:flex" />
        </div>
        <div className="flex items-center justify-end gap-x-4">
          <NavbarMenu className="md:hidden flex z-50" />
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
}
