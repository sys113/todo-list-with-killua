import type { Metadata } from "next";
import Providers from "./providers";
import "@/styles/global.css";
import "normalize.css/normalize.css";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "simple todo-list",
  description: "developed by hamid shahsavani",
};

const roboto = Inter({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <body
        suppressHydrationWarning={true}
        className={`flex h-screen w-screen flex-col items-center justify-center bg-slate-800 p-5 text-[15px] text-white ${roboto.style.fontFamily}`}
      >
        <Providers>
          <div className="w-full max-w-[500px] space-y-4 rounded-lg border border-gray-500 p-3.5">
            <header className="flex items-center justify-between font-medium">
              <p>Todo List</p>
              <button className="rounded-md bg-purple-600 px-6 py-[7px] text-white transition-all duration-300">
                add
              </button>
            </header>
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
