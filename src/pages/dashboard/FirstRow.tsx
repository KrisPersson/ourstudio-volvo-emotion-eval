import styled from "@emotion/styled";
import { Container } from "../../styled-components/components/Container/index";
import CardBigA from "../../styled-components/components/CardBigA/index";
import { colors } from "../../styles/index";
import { GraphStack } from "../../styled-components/graphics/GraphStack/index";
import { Grid } from "../../styled-components/components/Grid/index";
import { size } from "@/styled-components/layout/helpers";
import Image from "next/image";

const Text = styled.div({
  color: colors.tertiary.text,
  zIndex: 10,
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
const StackWrapper = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  alignItems: "flex-end",
  marginLeft: size(-1),
  marginTop: size(7),
});

const ActiveThreatGraphic = styled(Image)({
  objectPosition: "center",
  objectFit: "contain",
  position: "absolute",
  bottom: 0,
  left: 0,
  display: "block",
  zIndex: 1,
});

const ActiveThreatsList = styled.ol({
  margin: 0,
  marginBottom: size(13.5),
  paddingLeft: size(2.5),
  color: colors.tertiary.text,
});

const ActiveThreatListItem = styled.li({});

const Wrapper = styled(Grid)({
  ["& > *"]: {
    gridColumn: "auto / span 4",
  },
});

const incidentsData = [
  {
    value: 13,
    label: "major",
  },
  {
    value: 10,
    label: "medium",
  },
  {
    value: 20,
    label: "minor",
  },
];

const threatsData = ["threatname", "nameofthreat", "aggresivethreat"];

export default function FirstRow() {
  return (
    <Wrapper>
      <CardBigA
        headline="Severe incidents handled"
        mainValue="43"
        mainSymbol="crooked-arrow"
      >
        <Content>
          <Text>Mean time to resolution - 64 min</Text>
          <StackWrapper>
            {incidentsData.map((item, i) => {
              return (
                <GraphStack
                  key={item.value + item.label}
                  value={item.value}
                  label={item.label}
                  zIndex={incidentsData.length + 1 - i}
                  index={i}
                />
              );
            })}
          </StackWrapper>
        </Content>
      </CardBigA>
      <CardBigA
        headline="Patch ratio critical applications"
        mainValue="92"
        mainSymbol="%"
      >
        <Content>
          <Text>Top 50 critical applications</Text>
        </Content>
      </CardBigA>
      <CardBigA headline="Active threats tracked" mainValue="16">
        <ActiveThreatsList>
          {threatsData.map((item) => (
            <ActiveThreatListItem>{item}</ActiveThreatListItem>
          ))}
        </ActiveThreatsList>
        <Content>
          <ActiveThreatGraphic
            src="/images/graphics/peak-active-threats.svg"
            width={368}
            height={180}
          />
          <Text>
            Peak active threats <Bold>24</Bold>
          </Text>
        </Content>
      </CardBigA>
    </Wrapper>
  );
}
