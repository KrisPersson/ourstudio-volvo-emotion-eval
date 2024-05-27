import styled from "@emotion/styled";
import CardBig from "../../styled-components/components/CardBig/index";
import { colors } from "../../styles/index";
import { size } from "@/styled-components/layout/helpers";
import { Grid } from "../../styled-components/components/Grid/index";
import GraphOneDim from "../../styled-components/graphics/GraphOneDim/index";
import { sourceCodeData, accessControlData } from "../../data/data";

const Text = styled.div({
  color: colors.tertiary.text,
  marginTop: size(5),
});

const Content = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});
const Wrapper = styled(Grid)({
  marginInline: "var(--ignore-gutter)",

  ["& > *"]: {
    gridColumn: "auto / span 12",
  },
  ["@media (min-width: 900px)"]: {
    ["& > *"]: {
      gridColumn: "auto / span 6",
    },
  },
});

export default function FourthRow() {
  return (
    <Wrapper>
      <CardBig headline="Source code scanning" mainValue="99" mainSymbol="%">
        <Content>
          <GraphOneDim categories={sourceCodeData} />
          <Text>Across 26 repositories</Text>
        </Content>
      </CardBig>
      <CardBig headline="Access control" mainValue="363" mainSymbol="users">
        <Content>
          <GraphOneDim categories={accessControlData} />
        </Content>
      </CardBig>
    </Wrapper>
  );
}
