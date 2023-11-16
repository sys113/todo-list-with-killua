import type { Metadata } from "next";
import Providers from "./providers";
import "@/styles/global.css";
import "normalize.css/normalize.css";

export const metadata: Metadata = {
  title: "simple todo-list",
  description: "developed by hamid shahsavani",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <body
        suppressHydrationWarning={true}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
