import type { Metadata } from "next";
import Providers from "./providers";
import "@/styles/global.css";
import "normalize.css/normalize.css";
import { Inter } from "next/font/google";
import Layout from "@/containers/layout";

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
        suppressHydrationWarning={true}
        className={`font-inter flex h-screen w-screen flex-col items-center justify-center bg-slate-800 p-5 text-[15px] text-white ${fontInter.variable}`}
      >
        <Providers>
          <Layout>{props.children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
