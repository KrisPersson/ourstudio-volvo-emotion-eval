import styled from "@emotion/styled";
import { Wrapper } from "./wrapper";
import { size } from "../../layout/helpers";

const Item = styled.div({
  height: size(7),
  borderRadius: size(1),
});

type GraphCategoryProp = {
  name: string;
  value: number;
  color: string;
};

type GraphOneDimProps = {
  categories: GraphCategoryProp[];
};

export default function GraphOneDim({ categories }: GraphOneDimProps) {
  const totalValue = categories.reduce(
    (acc: number, cur: GraphCategoryProp) => {
      return acc + cur.value;
    },
    0
  );
  const Items = categories.map((item: GraphCategoryProp, i: number) => {
    const itemValuePercentage = (item.value / totalValue) * 100;
    return (
      <Item
        style={{ width: `${itemValuePercentage}%`, background: item.color }}
      />
    );
  });

  return <Wrapper numItems={categories.length}>{Items}</Wrapper>;
}
