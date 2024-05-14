import styled from "@emotion/styled";
import { colors } from "../../../styles/index";
import { size } from "../../layout/helpers";

const Wrapper = styled.ul({
  gridColumn: "1 / -1",
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  border: `1px solid ${colors.secondary.background}`,
  borderRadius: "3px",
  listStyle: "none",
  paddingLeft: 0,
  margin: 0,
  paddingInline: size(4),
  paddingBlock: size(5),
  rowGap: size(3),
  columnGap: size(2),
});

type PillListProps = {
  children: React.ReactNode;
};

export default function PillList({ children }: PillListProps) {
  return <Wrapper>{children}</Wrapper>;
}
