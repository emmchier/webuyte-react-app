import styled from "styled-components";

export const Content = styled.div`
  padding: ${({ theme }) => theme.spacing.space20};
  background-color: ${({ theme }) => theme.color.disabled};
  border-radius: ${({ theme }) => theme.border.radius.main};
`;
