import styled from "@emotion/styled";
import { size } from "../../layout/helpers";

export const Grid = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(12, 1fr)",
  gap: size(3),
});
