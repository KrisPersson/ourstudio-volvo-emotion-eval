import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Sidebar from "../styled-components/components/Sidebar/index";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#fff"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#212121"
        />
      </Head>
      <Sidebar />
      <Component {...pageProps} />
    </>
  );
}
