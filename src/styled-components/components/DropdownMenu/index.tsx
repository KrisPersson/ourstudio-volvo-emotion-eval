import styled from "@emotion/styled";
import { DropdownMenuOption } from "../../../types/index";
import { size } from "../../layout/helpers";
import { colors } from "../../../styles/index";
import Image from "next/image";

const Wrapper = styled.div({
  padding: "7px 12px",
  background: colors.secondary.background,
  borderBottom: `1px solid ${colors.primary.surface}`,
  position: "relative",
  ["@media (min-width: 600px)"]: {
    maxHeight: "57px",
    alignSelf: "flex-end",
  },
});

const Label = styled.label({
  display: "flex",
  flexDirection: "column",
  fontSize: "0.75rem",
  color: colors.tertiary.text,
  ["&:before"]: {
    content: '""',
    width: "16px",
    height: "16px",
    backgroundImage: "url(/images/icons/dropdown-arrow.svg)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    position: "absolute",
    right: size(1.5),
    top: 0,
    bottom: 0,
    marginTop: "auto",
    marginBottom: "auto",
  },
});
const Option = styled.option({});
const Select = styled.select({
  maxWidth: size(30),
  minWidth: size(27),
  border: "none",
  fontSize: "0.875rem",
  background: colors.secondary.background,
  color: colors.secondary.text,
  appearance: "none",
  outline: "none",
});

type DropdownMenuProps = {
  data: DropdownMenuOption[];
  label: string;
};

export default function DropdownMenu({ data, label }: DropdownMenuProps) {
  const labelId = `dropdown-${label.toLowerCase()}`;
  return (
    <Wrapper>
      <Label htmlFor={labelId}>{label}</Label>
      <Select id={labelId}>
        {data.map((opt) => {
          return (
            <Option key={opt.value + opt.label} value={opt.value}>
              {opt.label}
            </Option>
          );
        })}
      </Select>
    </Wrapper>
  );
}
