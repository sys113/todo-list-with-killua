import "@/styles/global.css";
import "normalize.css/normalize.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Template from "@/containers/template";

import Providers from "./providers";

export const metadata: Metadata = {
  title: "simple todo-list",
  description: "developed by hamid shahsavani",
};

const fontInter = Inter({ subsets: ["latin"], variable: "--font-inter" });

interface IProps {
  children: React.ReactNode;
}

export default function RootLayout(props: IProps): JSX.Element {
  return (
    <html lang="en" dir="ltr">
      <body
        suppressHydrationWarning
        className={`flex h-screen w-screen flex-col items-center justify-center bg-slate-800 p-5 font-inter text-[15px] text-white ${fontInter.variable}`}
      >
        <Providers>
          <Template>{props.children}</Template>
        </Providers>
      </body>
    </html>
  );
}
