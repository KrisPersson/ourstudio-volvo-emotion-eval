import styled from "@emotion/styled";
import { size } from "../../layout/helpers";
import { colors } from "../../../styles/index";

export const Wrapper = styled.div({
  height: "100vh",
  maxHeight: "100vh",
  position: "fixed",
  paddingInline: size(2),
  paddingBlock: size(3),
  backgroundColor: colors.secondary.background,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: size(3),
  gridColumn: "1 / 2",
  ["@media (max-width: 899px)"]: {
    position: "unset",
    display: "none",
  },
});
