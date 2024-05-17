import styled from "@emotion/styled";
import Image from "next/image";
import { size } from "../../layout/helpers";
import { colors } from "../../../styles/index";
import { Wrapper } from "./wrapper";

const Headline = styled.div({
  fontSize: "1.125rem",
  fontWeight: 400,
});
const MainNumber = styled.div({
  fontSize: "2.5rem",
  fontWeight: 500,
  display: "inline",
});
const MainSymbol = styled.span({
  fontSize: "1.125rem",
  display: "inline",
  marginLeft: size(1),
});
const MainImgSymbol = styled(Image)({
  display: "inline",
  marginLeft: size(1),
});

const TextContent = styled.div({
  gridColumn: "1 / span 1",
});
const GraphicsContent = styled.div({
  gridColumn: "2 / span 1",
  display: "flex",
  justifyContent: "flex-end",
});

type CardSmallProps = {
  headline: string;
  mainValue: string;
  mainSymbol?: string;
  children: React.ReactNode;
};

export default function CardSmall({
  headline,
  mainValue,
  mainSymbol,
  children,
}: CardSmallProps) {
  return (
    <Wrapper>
      <TextContent>
        <Headline>{headline}</Headline>
        <MainNumber>{mainValue}</MainNumber>
        {mainSymbol && mainSymbol !== "crooked-arrow" ? (
          <MainSymbol>{mainSymbol}</MainSymbol>
        ) : (
          mainSymbol && (
            <MainImgSymbol
              src={`/images/icons/${mainSymbol}.svg`}
              width={32}
              height={32}
              alt={`${mainSymbol}-icon`}
            />
          )
        )}
      </TextContent>
      <GraphicsContent>{children}</GraphicsContent>
    </Wrapper>
  );
}
