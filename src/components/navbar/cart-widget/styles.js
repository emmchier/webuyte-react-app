import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme }) => `padding: ${theme.spacing.space8} ${theme.spacing.space10}`};
  background-color: ${({ theme }) => theme.color.grey};
  border-radius: ${({ theme }) => theme.border.radius.main};
`;

export const Icon = styled.i`
  color: ${({ theme }) => theme.color.white};
`;

export const Counter = styled.p`
  font-size: ${({ theme }) => theme.font.size.primary};
  color: ${({ theme }) => theme.color.white};
  margin: 0 5px 0;
`;
