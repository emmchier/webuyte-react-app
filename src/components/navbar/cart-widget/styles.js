import styled from "styled-components";

export const Content = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: ${({ theme }) => theme.spacing(5)};

  svg {
    position: absolute;
  }
`;

export const Counter = styled.p`
  font-size: ${({ theme }) => theme.font.medium.size};
  line-height: ${({ theme }) => theme.font.medium.lineHeight};
  color: ${({ theme }) => theme.color.white};
  position: absolute;
  z-index: 9;
  transform: translateY(-6px);
`;
