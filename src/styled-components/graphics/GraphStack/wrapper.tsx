import styled from "@emotion/styled";
import { size } from "../../layout/helpers";
import { colors } from "../../../styles/index";

export const Wrapper = styled.div<{
  $label: string;
  $zIndex: number;
  $value: number;
  $index: number;
}>(
  {
    borderRadius: `${size(1)} ${size(1)} 0 0`,
    padding: size(1.5),
    paddingBottom: size(2),
    textAlign: "right",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: "var(--ignore-big-card-block-padding)",
    minHeight: size(10),
    maxHeight: size(20.5),
  },
  (props) => ({
    backgroundColor:
      props.$label === "major"
        ? colors.primary.surface
        : props.$label === "medium"
        ? colors.secondary.surface
        : colors.tertiary.surface,
  }),
  (props) => ({
    color:
      props.$label === "minor"
        ? colors.primary.surface
        : colors.primary.background,
  }),
  (props) => ({
    height: props.$value * 10 - 9 + "px",
  }),
  (props) => ({
    zIndex: props.$zIndex || 1,
  }),
  (props) => ({
    marginLeft: props.$index !== 0 ? "-20px" : "unset",
  })
);
