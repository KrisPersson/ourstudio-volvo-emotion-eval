import styled from "@emotion/styled";
import { size } from "../../layout/helpers";
import { colors } from "../../../styles/index";

export const Wrapper = styled.article({
  padding: size(3),
  color: colors.primary.text,
  display: "grid",
  gridTemplateColumns: "1fr 48px",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: size(1),
  gridColumn: "auto / span 4",
  border: `1px solid ${colors.secondary.background}`,
  borderRadius: "3px",
});
