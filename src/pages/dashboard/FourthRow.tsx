import styled from "@emotion/styled";
import { Container } from "../../styled-components/components/Container/index";
import CardBigA from "../../styled-components/components/CardBigA/index";
import { colors } from "../../styles/index";
import { GraphStack } from "../../styled-components/graphics/GraphStack/index";
import { size } from "@/styled-components/layout/helpers";
import { Grid } from "../../styled-components/components/Grid/index";
import Image from "next/image";
import GraphOneDim from "../../styled-components/graphics/GraphOneDim/index";

const Text = styled.div({
  color: colors.tertiary.text,
});
const Bold = styled.span({
  fontWeight: 500,
  color: colors.primary.text,
});
const Content = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});
const Wrapper = styled(Grid)({
  ["& > *"]: {
    gridColumn: "auto / span 6",
  },
});

const sourceCodeData = [
  {
    name: "low",
    value: 4,
    color: colors.tertiary.surface,
  },
  {
    name: "medium",
    value: 3,
    color: colors.secondary.surface,
  },
  {
    name: "high",
    value: 5,
    color: colors.warning.default,
  },
  {
    name: "critical",
    value: 4,
    color: colors.danger.default,
  },
];

const accessControlData = [
  {
    name: "admin",
    value: 64,
    color: colors.primary.surface,
  },
  {
    name: "superusers",
    value: 55,
    color: colors.secondary.surface,
  },
  {
    name: "viewers",
    value: 244,
    color: colors.tertiary.surface,
  },
];

export default function FourthRow() {
  return (
    <Wrapper>
      <CardBigA headline="Source code scanning" mainValue="99" mainSymbol="%">
        <Content>
          <GraphOneDim categories={sourceCodeData} />
          <Text>Across 26 repositories</Text>
        </Content>
      </CardBigA>
      <CardBigA headline="Access control" mainValue="363" mainSymbol="users">
        <Content>
          <GraphOneDim categories={accessControlData} />
        </Content>
      </CardBigA>
    </Wrapper>
  );
}
