import styled from "@emotion/styled";
import { colors } from "../../../styles/index";
import { size } from "../../layout/helpers";

const Pill = styled.div({
  borderRadius: "100vmax",
  paddingInline: size(1),
  paddingBlock: size(0.1),
  maxWidth: "fit-content",
  display: "flex",
  justifyContent: "center",
});

const PillContent = styled.div({
  minWidth: "3ch",
  lineHeight: 1.71,
  fontWeight: 500,
  color: colors.white,
  fontSize: "0.875rem",
  textAlign: "center",
});

const Text = styled.div({
  fontSize: "1rem",
  lineHeight: 1.5,
  opacity: 0.7,
  color: colors.primary.text,
  display: "inline",
});

const Wrapper = styled.li({
  display: "flex",
  gap: size(1),
});

type PillListItemProps = {
  label: string;
  value: number;
};

export default function PillListItem({ label, value }: PillListItemProps) {
  const color =
    value > 98
      ? colors.primary.surface
      : value > 87
      ? colors.secondary.surface
      : value > 77
      ? colors.warning.darker
      : colors.danger.darker;
  console.log(color);
  return (
    <Wrapper>
      <Pill style={{ background: color }}>
        <PillContent>{value}</PillContent>
      </Pill>
      <Text>{label}</Text>
    </Wrapper>
  );
}
