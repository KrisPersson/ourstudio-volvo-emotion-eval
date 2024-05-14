import styled from "@emotion/styled";
import { size } from "../../layout/helpers";
import { colors } from "../../../styles/index";

export const Wrapper = styled.div(
  {
    display: "flex",
  },
  (props) => ({
    gap: `${24 / props.numItems}px`,
  })
);
