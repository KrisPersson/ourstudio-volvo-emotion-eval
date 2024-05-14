import { colors } from "@/styles/index";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { size } from "../../layout/helpers";

type PageProps = {
  children: React.ReactNode;
};

const Wrapper = styled.main({
  gridColumn: "2 / -1",
  paddingBlock: size(7),
  background: colors.primary.background,
});

export default function Page({ children }: PageProps) {
  return <Wrapper>{children}</Wrapper>;
}
