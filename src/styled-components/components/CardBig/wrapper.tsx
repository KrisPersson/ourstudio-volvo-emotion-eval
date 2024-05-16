import styled from "@emotion/styled";
import { size } from "../../layout/helpers";
import { colors } from "../../../styles/index";

export const Wrapper = styled.article({
  paddingBlock: "var(--big-card-block-padding)",
  paddingInline: size(2),
  backgroundColor: colors.secondary.background,
  color: colors.primary.text,
  display: "flex",
  flexDirection: "column",
  gap: size(1),
  position: "relative",
  overflowX: "hidden",
  ["@media (min-width: 500px)"]: {
    paddingInline: size(4),
  },
});
