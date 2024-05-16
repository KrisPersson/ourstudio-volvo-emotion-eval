import styled from "@emotion/styled";
import { size } from "../../layout/helpers";
import { colors } from "../../../styles/index";

export const Wrapper = styled.div({
  height: "100vh",
  maxHeight: "100vh",
  position: "absolute",
  left: 0,
  top: 0,
  width: "100%",
  paddingInline: size(2),
  paddingBlock: size(3),
  backgroundColor: colors.secondary.background,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: size(3),
  zIndex: 11,
  ["@media (min-width: 900px)"]: {
    position: "unset",
    display: "none",
  },
});
