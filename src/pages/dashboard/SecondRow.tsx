import styled from "@emotion/styled";
import SmallCard from "../../styled-components/components/CardSmall/index";
import { colors } from "../../styles/index";
import { size } from "@/styled-components/layout/helpers";
import { Grid } from "../../styled-components/components/Grid/index";
import { TrendUp } from "@phosphor-icons/react";
import GraphDonut from "../../styled-components/graphics/GraphDonut/index";

const IconContainer = styled.div({
  width: size(6),
  height: size(6),
  borderRadius: "100vmax",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
const Content = styled.div({});
const Wrapper = styled(Grid)({
  ["& > *"]: {
    gridColumn: "auto / span 12",
  },
  ["@media (min-width: 1250px)"]: {
    ["& > *"]: {
      gridColumn: "auto / span 4",
    },
  },
});

const DonutWrapper = styled.div({
  transform: "translate(6px, -11px)",
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
        data: [96, 4],
        backgroundColor: [colors.tertiary.surface, colors.danger.default],
        datalabels: {
          display: false,
        },
        cutout: "65%",
        spacing: 0,
        borderWidth: 0,
        borderJoinStyle: "bevel",
      },
    ],
  },
};

export default function SecondRow() {
  return (
    <Wrapper>
      <SmallCard headline="Training completed" mainValue="96" mainSymbol="%">
        <DonutWrapper>
          <GraphDonut data={cfg.data} maxWidth="58px" />
        </DonutWrapper>
      </SmallCard>
      <SmallCard
        headline="Unsuccessfull phising attempts"
        mainValue="8"
        mainSymbol="%"
      >
        <Content>
          <IconContainer style={{ background: colors.danger.lighter }}>
            <TrendUp size={24} weight="bold" color={colors.danger.darker} />
          </IconContainer>
        </Content>
      </SmallCard>
      <SmallCard headline="User reported incidents" mainValue="12">
        <Content>
          <IconContainer style={{ background: colors.success.lighter }}>
            <TrendUp size={24} weight="bold" color={colors.success.darker} />
          </IconContainer>
        </Content>
      </SmallCard>
    </Wrapper>
  );
}
