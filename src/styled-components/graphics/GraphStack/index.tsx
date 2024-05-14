import styled from "@emotion/styled";
import { Wrapper } from "./wrapper";

type StackProps = {
  value: number;
  label: string;
  zIndex?: number;
  index?: number;
};

const Value = styled.div({
  fontSize: "1.125rem",
  fontWeight: 500,
});

const Label = styled.div({
  fontSize: "0.875rem",
  lineHeight: 1.71,
  textTransform: "capitalize",
});

export function GraphStack({ value, label, zIndex, index }: StackProps) {
  return (
    <Wrapper label={label} value={value} zIndex={zIndex} index={index}>
      <Value>{value}</Value>
      <Label>{label}</Label>
    </Wrapper>
  );
}
