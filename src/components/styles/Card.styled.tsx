import styled from "styled-components";
import { Theme } from "./theme";

interface StyledCardProps {
  direction?: string;
}

export const StyledCard = styled.div<StyledCardProps>`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 40px 0;
  padding: 60px;
  flex-direction: ${({ direction = "row" }) => direction};
  img {
    width: 80%;
  }

  & > div {
    flex: 1;
  }

  @media (max-width: ${({ theme }: Theme) => theme.mobile}) {
    flex-direction: column;
  }
`;
