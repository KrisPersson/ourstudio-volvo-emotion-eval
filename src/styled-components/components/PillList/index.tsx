import styled from "@emotion/styled";
import { colors } from "../../../styles/index";
import { size } from "../../layout/helpers";

const Wrapper = styled.ul({
  gridColumn: "1 / -1",
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  border: `1px solid ${colors.primary.border}`,
  borderRadius: "3px",
  listStyle: "none",
  paddingLeft: 0,
  margin: 0,
  paddingInline: size(4),
  paddingBlock: size(5),
  rowGap: size(3),
  columnGap: size(2),
  ["@media (max-width: 1250px)"]: {
    gridTemplateColumns: "repeat(3, 1fr)",
  },
  ["@media (max-width: 900px)"]: {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  ["@media (max-width: 650px)"]: {
    gridTemplateColumns: "1fr",
  },
});

type PillListProps = {
  children: React.ReactNode;
};

export default function PillList({ children }: PillListProps) {
  return <Wrapper>{children}</Wrapper>;
}
