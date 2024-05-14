import styled from "@emotion/styled";

const StyledNav = styled.nav({});

type NavProps = {
  children: React.ReactNode;
  aria: string;
};

export default function Nav({ children, aria }: NavProps) {
  return <StyledNav aria-label={aria}>{children}</StyledNav>;
}
