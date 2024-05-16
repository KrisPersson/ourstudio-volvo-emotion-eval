import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import styled from "@emotion/styled";
import { size } from "../../layout/helpers";

ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.defaults.plugins.legend.align = "left";
ChartJS.defaults.elements.arc.borderRadius = "10px";

const Wrapper = styled.div({
  maxWidth: size(17.75),
  marginInline: "auto",
});
type ChartData = {
  datasets: DataSet[];
};
type DataSet = { data: Data };
type Data = number[];
type DoughnutProps = {
  data: ChartData;
};

export default function GraphDonut({ data }: DoughnutProps) {
  return (
    <Wrapper>
      <Doughnut data={data} />
    </Wrapper>
  );
}
