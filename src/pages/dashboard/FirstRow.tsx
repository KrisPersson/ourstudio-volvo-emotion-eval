import styled from "@emotion/styled";
import CardBig from "../../styled-components/components/CardBig/index";
import { colors } from "../../styles/index";
import { GraphStack } from "../../styled-components/graphics/GraphStack/index";
import { Grid } from "../../styled-components/components/Grid/index";
import { size } from "@/styled-components/layout/helpers";
import Image from "next/image";
import GraphDonut from "../../styled-components/graphics/GraphDonut/index";
import { threatsData, incidentsData } from "../../data/data";

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
  flexBasis: "100%",
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
  top: "248.5px",
  left: 0,
  zIndex: 1,
  minWidth: "100%",
  height: "auto",
});

const ActiveThreatsList = styled.ol({
  margin: 0,
  marginBottom: size(13.5),
  paddingLeft: size(2.5),
  color: colors.tertiary.text,
});

const ActiveThreatListItem = styled.li({});

const Wrapper = styled(Grid)({
  marginInline: "var(--ignore-gutter)",
  ["& > *"]: {
    gridColumn: "auto / span 12",
  },
  ["@media (min-width: 600px)"]: {
    marginInline: "unset",

    ["& > *"]: {
      gridColumn: "auto / span 6",
    },
  },
  ["@media (min-width: 1150px)"]: {
    ["& > *"]: {
      gridColumn: "auto / span 4",
    },
  },
});

const cfg = {
  type: "doughnut",
  options: {
    plugins: {
      datalabels: {
        display: false,
      },
    },
  },
  data: {
    datasets: [
      {
        data: [92, 8],
        backgroundColor: [colors.tertiary.surface, colors.danger.default],
        datalabels: {
          display: false,
        },
        borderRadius: 5,
        spacing: 1,
        cutout: "65%",
      },
    ],
  },
};

export default function FirstRow() {
  return (
    <Wrapper>
      <CardBig
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
      </CardBig>
      <CardBig
        headline="Patch ratio critical applications"
        mainValue="92"
        mainSymbol="%"
      >
        <Content>
          <GraphDonut data={cfg.data} maxWidth={"142px"} />
          <Text>Top 50 critical applications</Text>
        </Content>
      </CardBig>
      <CardBig headline="Active threats tracked" mainValue="16">
        <ActiveThreatsList>
          {threatsData.map((item, i) => (
            <ActiveThreatListItem key={i + "activethreat"}>
              {item}
            </ActiveThreatListItem>
          ))}
        </ActiveThreatsList>
        <Content style={{ justifyContent: "flex-end" }}>
          <ActiveThreatGraphic
            src="/images/graphics/peak-active-threats.svg"
            width={368}
            height={232}
            style={{ height: "unset" }}
            alt="Active Threats Graphic"
          />
          <Text>
            Peak active threats <Bold>24</Bold>
          </Text>
        </Content>
      </CardBig>
    </Wrapper>
  );
}
