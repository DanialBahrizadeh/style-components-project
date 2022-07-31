import styled from "styled-components";
import { Theme } from "./theme";

export const Flex = styled.div`
  display: flex;
  align-items: center;

  & > div,
  & > ul {
    flex: 1;
  }

  @media (max-width: ${({ theme }: Theme) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`;
