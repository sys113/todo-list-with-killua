"use client";

import { SSRKilluaProvider } from "killua";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        limit={1}
        closeButton={false}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={true}
        theme="dark"
      />
      <SSRKilluaProvider>{children}</SSRKilluaProvider>
    </>
  );
}
