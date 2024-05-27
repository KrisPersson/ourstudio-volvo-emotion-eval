import styled from "@emotion/styled";
import { Wrapper, StapleWrapper, DataWrapper } from "./wrapper";
import { size } from "../../layout/helpers";
import { colors } from "../../../styles/index";

const StapleItem = styled.div({
  height: size(7),
  borderRadius: size(1),
});

const DataItem = styled.div({
  display: "flex",
  flexDirection: "column",
});

const DataItemInner = styled.div({
  display: "flex",
  alignItems: "center",
  gap: "6px",
});

const NumericValue = styled.div({
  color: colors.primary.text,
  fontSize: "1.5rem",
  fontWeight: 500,
});

const TextValue = styled.div({
  fontSize: "0.875rem",
  opacity: 0.7,
  fontWeight: 400,
  lineHeight: 1.71,
  textTransform: "capitalize",
});

const PusherLine = styled.div({
  maxWidth: "1px",
  background: colors.primary.text,
  opacity: 0.5,
  marginLeft: size(1.5),
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
  const indexOfItemsNeedingPusherLine: number[] = [];
  const BigLetterWidth = 15;
  const SmallLetterWidth = 10;
  const Gap = 6;

  const StapleItems = categories.map((item: GraphCategoryProp, i: number) => {
    const itemValuePercentage = (item.value / totalValue) * 100;
    const itemValuePx = 500 * (itemValuePercentage / 100);
    const dataWidthPx =
      item.value.toString().split("").length * BigLetterWidth +
      Gap +
      item.name.split("").length * SmallLetterWidth;

    if (itemValuePx < dataWidthPx) indexOfItemsNeedingPusherLine.push(i);
    return (
      <StapleItem
        style={{ width: `${itemValuePercentage}%`, background: item.color }}
        key={"staple" + i}
      />
    );
  });

  const DataItems = categories.map((item: GraphCategoryProp, i: number) => {
    const itemValuePercentage = (item.value / totalValue) * 100;

    return (
      <DataItem
        style={{ width: `${itemValuePercentage}%` }}
        key={"dataitem" + i}
      >
        {indexOfItemsNeedingPusherLine.includes(i) && (
          <PusherLine
            style={{
              height:
                (40 * indexOfItemsNeedingPusherLine.length) /
                (indexOfItemsNeedingPusherLine.indexOf(i) + 1),
            }}
          />
        )}
        <DataItemInner>
          <NumericValue>{item.value}</NumericValue>
          <TextValue>{item.name}</TextValue>
        </DataItemInner>
      </DataItem>
    );
  });

  return (
    <Wrapper>
      <StapleWrapper $numItems={categories.length}>{StapleItems}</StapleWrapper>
      <DataWrapper $numItems={categories.length}>{DataItems}</DataWrapper>
    </Wrapper>
  );
}
