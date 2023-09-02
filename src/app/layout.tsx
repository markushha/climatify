import "./globals.css";
import { Inter } from "next/font/google";

import type { Metadata } from "next";

import Navbar from "@/components/common/layout/navbar";
import { ThemeProvider } from "@/components/providers/theme-provider";
import Footer from "@/components/common/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Climatify",
  description:
    "Изменим климат Алматы используя ИИ! Наша платформа совмещает в себе несколько ИИ сервисов для улучшения осведомленности и принятия решений в области экологии.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <header className="w-full border-b-[1px] dark:border-slate-800 border-slate-100">
            <Navbar />
          </header>
          <main className="flex mx-auto max-w-[90%] sm:max-w-[85%] md:max-w-[80%]">
            {children}
          </main>
          <footer className="bg-white dark:bg-transparent mt-16 relative bottom-0 w-full border-t-[1px] dark:border-slate-800 border-slate-100">
            <Footer />
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
