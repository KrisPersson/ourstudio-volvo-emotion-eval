import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { colors } from "../../../styles/index";
import { size } from "../../layout/helpers";
import DropdownMenu from "../DropdownMenu/index";
import { DropdownMenuOption } from "../../../types/index";

type PageHeaderProps = {
  title: string;
  tagline: string;
  dropdownData: DropdownMenuOption[];
};

const Wrapper = styled.header({
  display: "flex",
  justifyContent: "space-between",
  gap: size(0.5),
  marginBottom: size(7),
});

const H1 = styled.h1({
  fontSize: "3rem",
  fontWeight: 500,
  margin: 0,
  color: colors.primary.text,
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
      <HeadingsWrapper>
        <Tagline>{tagline}</Tagline>
        <H1>{title}</H1>
      </HeadingsWrapper>
      <DropdownMenu label="Period" data={dropdownData}></DropdownMenu>
    </Wrapper>
  );
}
