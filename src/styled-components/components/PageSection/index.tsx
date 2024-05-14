import { colors } from "../../../styles/index";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { size } from "../../layout/helpers";
import { Container } from "../Container/index";

type PageProps = {
  children: React.ReactNode;
  headline?: string;
};

const Wrapper = styled.section({
  ["& + &"]: {
    marginTop: size(7),
  },
});

const Headline = styled.h2({
  fontSize: "1.25rem",
  fontWeight: 500,
  lineHeight: 1.2,
  gridColumn: "1 / -1",
  color: colors.primary.text,
});

export default function PageSection({ children, headline }: PageProps) {
  return (
    <Wrapper>
      <Container>
        {headline && <Headline>{headline}</Headline>}
        {children}
      </Container>
    </Wrapper>
  );
}
