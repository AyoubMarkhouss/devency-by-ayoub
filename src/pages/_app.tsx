import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import Nav from "@/components/Nav";
// import { Carattere } from "next/font/google";

// const Caratterefont = Carattere({
//   subsets: ["latin"],
//   weight: "400",
// });
import localFont from 'next/font/local'
const myfont = localFont({ src: "./Fonts/RedHatDisplay-Regular.woff" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      
      <main className={`${myfont.className}`}>
        <Nav />
        <Component {...pageProps} />
   
      </main>
    </NextUIProvider>
  );
}
