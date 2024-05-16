import styled from "@emotion/styled";
import { colors } from "../../../styles/index";
import { size } from "../../layout/helpers";
import DropdownMenu from "../DropdownMenu/index";
import { DropdownMenuOption } from "../../../types/index";
import { Container } from "../Container/index";

type PageHeaderProps = {
  title: string;
  tagline: string;
  dropdownData: DropdownMenuOption[];
};

const Wrapper = styled.header({});

const Inner = styled.div({
  display: "flex",
  justifyContent: "space-between",
  gap: size(0.5),
  marginBottom: size(7),
  flexDirection: "column",
  ["@media (min-width: 600px)"]: {
    flexDirection: "row",
  },
});

const H1 = styled.h1({
  fontSize: "3rem",
  fontWeight: 500,
  margin: 0,
  marginTop: size(3),
  color: colors.primary.text,
  lineHeight: 1.2,
});

const HeadingsWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
});

const Tagline = styled.div({
  fontSize: "1rem",
  fontWeight: 400,
  color: colors.tertiary.text,
  lineHeight: 1.5,
});

export default function PageHeader({
  title,
  tagline,
  dropdownData,
}: PageHeaderProps) {
  return (
    <Wrapper>
      <Container>
        <Inner>
          <HeadingsWrapper>
            <Tagline>{tagline}</Tagline>
            <H1>{title}</H1>
          </HeadingsWrapper>
          <DropdownMenu label="Period" data={dropdownData}></DropdownMenu>
        </Inner>
      </Container>
    </Wrapper>
  );
}
