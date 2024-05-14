import styled from "@emotion/styled";
import Image from "next/image";
import { colors } from "../../../styles/index";
import { size } from "../../layout/helpers";

const Wrapper = styled.div({
  margin: "auto",
  borderRadius: "12px",
  backgroundColor: colors.tertiary.surface,
});
const Text = styled.div({
  maxWidth: "fit-content",
  fontSize: "0.875rem",
  fontWeight: "700",
  padding: "6px",
  color: colors.primary.surface,
  lineHeight: "1.25rem",
});

type UserIconProps = {
  initials: string;
};

export default function UserIcon({ initials }: UserIconProps) {
  return (
    <Wrapper>
      <Text>{initials}</Text>
    </Wrapper>
  );
}
