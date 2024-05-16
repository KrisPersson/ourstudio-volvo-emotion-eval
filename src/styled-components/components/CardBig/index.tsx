import styled from "@emotion/styled";
import { size } from "../../layout/helpers";
import { colors } from "../../../styles/index";
import { Wrapper } from "./wrapper";
import { TrendUp } from "@phosphor-icons/react";

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

const TopContent = styled.div({});
const BottomContent = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  flexBasis: "100%",
});

type CardBigProps = {
  headline: string;
  mainValue: string;
  mainSymbol?: string | "crooked-arrow";
  children: React.ReactNode;
};

export default function CardBig({
  headline,
  mainValue,
  mainSymbol,
  children,
}: CardBigProps) {
  return (
    <Wrapper>
      <TopContent>
        <Headline>{headline}</Headline>
        <MainNumber>{mainValue}</MainNumber>
        {mainSymbol && mainSymbol !== "crooked-arrow" ? (
          <MainSymbol>{mainSymbol}</MainSymbol>
        ) : (
          mainSymbol && <TrendUp size={32} style={{ marginLeft: size(1) }} />
        )}
      </TopContent>
      <BottomContent>{children}</BottomContent>
    </Wrapper>
  );
}
