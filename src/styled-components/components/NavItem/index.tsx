import styled from "@emotion/styled";
import Image from "next/image";
import { colors } from "../../../styles/index";
import { size } from "../../layout/helpers";
import { ButtonDiv } from "./button-div";

const StyledNavItem = styled.div({
  display: "grid",
  gridTemplateRows: "auto auto",
  gap: size(0.5),
  paddingTop: size(0.5),
  paddingBottom: size(1),
});
const Text = styled.div({
  textAlign: "center",
  fontSize: "0.75rem",
  fontWeight: 400,
  fontStyle: "normal",
  color: colors.secondary.text,
  lineHeight: "1rem",
});
const SecondaryText = styled.div({
  fontSize: "0.625rem",
  color: colors.tertiary.text,
});

type NavItemProps = {
  label: string;
  imgSrc: string;
  buttonized?: "primary" | "secondary";
  secondaryText?: string;
};

export default function NavItem({
  label,
  imgSrc,
  buttonized,
  secondaryText,
}: NavItemProps) {
  return (
    <StyledNavItem>
      <ButtonDiv $buttonized={buttonized}>
        <Image
          src={`/images/icons/sidebar/${imgSrc}.svg`}
          width={24}
          height={24}
          alt={`${imgSrc}-icon`}
        />
      </ButtonDiv>
      <Text>
        {label}
        {secondaryText && (
          <SecondaryText style={{ fontSize: "0.625rem" }}>
            {secondaryText}
          </SecondaryText>
        )}
      </Text>
    </StyledNavItem>
  );
}
