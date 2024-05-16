import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Sidebar from "../styled-components/components/Sidebar/index";
import ModalNav from "../styled-components/components/ModalNav/index";
import ToggleMenuBtn from "../styled-components/components/ToggleMenuBtn/index";
import { useState } from "react";
import { List } from "@phosphor-icons/react";

export default function App({ Component, pageProps }: AppProps) {
  const [showMenu, setShowMenu] = useState(false);
  function handleClick() {
    setShowMenu((prev) => !prev);
  }

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
      {showMenu && <ModalNav handleClose={handleClick} />}
      <ToggleMenuBtn onClick={handleClick}>
        <List size={32} />
      </ToggleMenuBtn>
      <Sidebar />
      <Component {...pageProps} />
    </>
  );
}
