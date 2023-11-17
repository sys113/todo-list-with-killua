"use client";

import "react-toastify/dist/ReactToastify.css";

import { SSRKilluaProvider } from "killua";
import { ToastContainer } from "react-toastify";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        closeButton={false}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover
        theme="dark"
      />
      <SSRKilluaProvider>{children}</SSRKilluaProvider>
    </>
  );
}
