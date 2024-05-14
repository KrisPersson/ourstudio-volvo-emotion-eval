import styled from "@emotion/styled";
import SmallCard from "../../styled-components/components/CardSmall/index";
import { colors } from "../../styles/index";
import { size } from "@/styled-components/layout/helpers";
import { Grid } from "../../styled-components/components/Grid/index";

const Text = styled.div({
  color: colors.tertiary.text,
});
const Bold = styled.span({
  fontWeight: 500,
  color: colors.primary.text,
});
const Content = styled.div({});
const Wrapper = styled(Grid)({
  ["& > *"]: {
    gridColumn: "auto / span 4",
  },
});

export default function SecondRow() {
  return (
    <Wrapper>
      <SmallCard headline="Training completed" mainValue="96" mainSymbol="%">
        <Content></Content>
      </SmallCard>
      <SmallCard
        headline="Unsuccessfull phising attempts"
        mainValue="8"
        mainSymbol="%"
      >
        <Content></Content>
      </SmallCard>
      <SmallCard headline="User reported incidents" mainValue="12">
        <Content></Content>
      </SmallCard>
    </Wrapper>
  );
}
