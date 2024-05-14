import { Html, Head, Main, NextScript } from "next/document";
import { Global } from "@emotion/react";
import { globalStyle } from "../styled-components/layout/global-style";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <Global styles={globalStyle} />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
