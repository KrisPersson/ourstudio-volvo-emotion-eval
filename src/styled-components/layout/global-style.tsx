import { css } from "@emotion/react";
import { size } from "./helpers";
import { colors } from "../../styles/index";

export const globalStyle = css`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  html {
    font-size: 100%;
    -webkit-text-size-adjust: 100%;
    scroll-padding-top: ${size(6)};

    --container-max-width: ${size(144)};
    --font-main: "Volvo Novum", sans-serif;
    --big-card-block-padding: ${size(5)};
    --ignore-big-card-block-padding: calc(var(--big-card-block-padding) * -1);

  body {
    margin: 0;
    background-color: ${colors.primary.background};
    color: white;
    font-family: sans-serif;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: var(--font-main);
  }

  #__next {
    display: grid;
    grid-template-columns: 104px 1fr;
    gap: ${size(1)};
    min-height: 100vh;
    min-width: 100%;
  }
  @font-face {
    font-family: "Volvo Novum";
    font-style: regular;
    font-weight: 400;
    src: local("VolvoNovum"), url("/fonts/volvo-novum-regular.woff2");
  }

  @font-face {
    font-family: "Volvo Novum";
    font-style: medium;
    font-weight: 500;
    src: local("VolvoNovum"), url("/fonts/volvo-novum-medium.woff2");
  }
`;
