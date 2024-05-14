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
  fontSize: "4.5rem",
  fontWeight: 500,
  display: "inline",
});
const MainSymbol = styled.span({
  fontSize: "2rem",
  display: "inline",
  marginLeft: size(1),
});
const MainImgSymbol = styled(Image)({
  display: "inline",
  marginLeft: size(1),
});
const TopContent = styled.div({});
const BottomContent = styled.div({});

type CardBigAProps = {
  headline: string;
  mainValue: string;
  mainSymbol?: string | "crooked-arrow";
  children: React.ReactNode;
};

export default function CardBigA({
  headline,
  mainValue,
  mainSymbol,
  children,
}: CardBigAProps) {
  return (
    <Wrapper>
      <TopContent>
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
      </TopContent>
      <BottomContent>{children}</BottomContent>
    </Wrapper>
  );
}
