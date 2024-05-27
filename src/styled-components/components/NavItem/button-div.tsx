import styled from "@emotion/styled";
import { colors } from "../../../styles/index";
import { size } from "../../layout/helpers";

export const ButtonDiv = styled.div<{ $buttonized?: "primary" | "secondary" }>(
  {
    marginInline: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  (props) => ({
    background: props.$buttonized ? colors.primary.surface : "unset",
  }),
  (props) => ({
    paddingInline:
      props.$buttonized === "primary"
        ? size(2)
        : props.$buttonized === "secondary"
        ? size(1)
        : size(0),
  }),
  (props) => ({
    paddingBlock:
      props.$buttonized === "primary"
        ? size(0.5)
        : props.$buttonized === "secondary"
        ? size(1)
        : size(0),
  }),
  (props) => ({
    borderRadius:
      props.$buttonized === "primary"
        ? size(7)
        : props.$buttonized === "secondary"
        ? size(2)
        : size(0),
  })
);
