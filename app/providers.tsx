"use client";

import { SSRKilluaProvider } from "killua";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <SSRKilluaProvider>{children}</SSRKilluaProvider>;
}
