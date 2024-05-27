import styled from "@emotion/styled";
import { size } from "../../layout/helpers";

export const Wrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: size(2),
});

export const StapleWrapper = styled.div<{ $numItems: number }>(
  {
    display: "flex",
  },
  (props) => ({
    gap: `${24 / props.$numItems}px`,
  })
);

export const DataWrapper = styled(StapleWrapper)({});
