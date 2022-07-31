import styled from "styled-components";
import { Theme } from "./theme";

interface StyledHeaderProps {
  readonly bg: string;
}

export const StyledHeader = styled.header<StyledHeaderProps>`
  background-color: ${({ theme }: Theme) => theme.colors.header};
  padding: 40px 0;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: cetner;
  justify-content: space-between;
  margin-bottom: 40px;

  @media (max-width: ${({ theme }: Theme) => theme.mobile}) {
    flex-direction: column;
  }
`;

export const Logo = styled.img`
  @media (max-width: ${({ theme }: Theme) => theme.mobile}) {
    margin-bottom: 40px;
  }
`;

export const Image = styled.img`
  width: 375px;
  margin-left: 40px;

  @media (max-width: ${({ theme }: Theme) => theme.mobile}) {
    margin: 40px 0 30px;
  }
`;
