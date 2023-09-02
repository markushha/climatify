import { Input } from "@/components/ui/input";
import { ModeToggle } from "../components/mode-toggle";
import Link from "next/link";
import NavbarMenu from "../components/navbar-menu";

type NavbarProps = {
  showLogo?: boolean;
};

export default function Navbar({ showLogo }: NavbarProps) {
  return (
    <nav className="py-4 sticky top-0 grid grid-cols-2 md:grid-cols-3 items-center mx-auto max-w-[90%] sm:max-w-[85%] md:max-w-[80%]">
      <Link href="/" className="w-ful flex items-center gap-y-4">
        <div className="w-7 h-7 mr-2 rounded-full bg-gradient-to-r from-emerald-500 to-sky-500" />
        <h1 className="tracking-tight font-semibold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-sky-500">
          Climatify
        </h1>
      </Link>
      <div className="md:flex hidden">
        <NavbarMenu className="hidden md:flex" />
      </div>
      <div className="flex items-center justify-end gap-x-4">
        <NavbarMenu className="md:hidden flex" />
        <ModeToggle />
      </div>
    </nav>
  );
}
