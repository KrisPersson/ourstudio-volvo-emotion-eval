import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import styled from "@emotion/styled";
import { size } from "../../layout/helpers";

ChartJS.register(ArcElement, Tooltip, Legend);

const Wrapper = styled.div({
  marginInline: "auto",
});
type ChartData = {
  datasets: DataSet[];
};
type DataSet = { data: Data };
type Data = number[];
type DoughnutProps = {
  data: ChartData;
  maxWidth: string;
};

export default function GraphDonut({ data, maxWidth }: DoughnutProps) {
  return (
    <Wrapper style={{ maxWidth: maxWidth }}>
      <Doughnut data={data} />
    </Wrapper>
  );
}
