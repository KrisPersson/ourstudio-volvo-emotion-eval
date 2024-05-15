import styled from "@emotion/styled";
import { size } from "../../layout/helpers";

export const Grid = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, min(368px, 100%))",
  gap: size(3),
});
