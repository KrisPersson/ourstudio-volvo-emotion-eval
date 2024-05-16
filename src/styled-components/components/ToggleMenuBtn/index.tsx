import styled from "@emotion/styled";
import { size } from "../../layout/helpers";

const Button = styled.button({
  cursor: "pointer",
  position: "absolute",
  right: size(1),
  top: size(7),
  background: "transparent",
  border: "none",
  ["@media (min-width: 900px)"]: {
    position: "unset",
    display: "none",
  },
});

export default function ToggleMenuBtn({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) {
  return <Button onClick={onClick}>{children}</Button>;
}
