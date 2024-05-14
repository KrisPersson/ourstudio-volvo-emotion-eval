import styled from "@emotion/styled";
import { Wrapper } from "./wrapper";
import Image from "next/image";
import NavItem from "../NavItem/index";
import { size } from "../../layout/helpers";
import UserIcon from "../NavItem/user-icon";
import { colors } from "@/styles/index";

const Nav = styled.nav({
  display: "flex",
  flexDirection: "column",
  gap: size(1.5),
  color: colors.tertiary.text,
});

const ContentTop = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: size(6),
});
const ContentBottom = styled.div({});

type SidebarNavProps = {
  children: React.ReactNode;
};

export default function Sidebar() {
  return (
    <Wrapper>
      <ContentTop>
        <Image
          src="/images/icons/sidebar/volvo.svg"
          width={72}
          height={56}
          alt="Volvo-logo"
        />
        <Nav aria-label="Main">
          <NavItem label="Insights" imgSrc="insights" buttonized="primary" />
          <NavItem label="News" imgSrc="news" />
          <NavItem label="Guidance" imgSrc="guidance" />
          <NavItem label="Access" imgSrc="access" />
        </Nav>
      </ContentTop>
      <ContentBottom>
        <Nav aria-label="Secondary">
          <NavItem label="Search" imgSrc="search" secondaryText="(⌘ + K)" />
          <NavItem label="Add" imgSrc="plus" buttonized="secondary" />
          <UserIcon initials="AA" />
        </Nav>
      </ContentBottom>
    </Wrapper>
  );
}
