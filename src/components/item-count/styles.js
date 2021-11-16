import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.color.grey};
  border-radius: ${({ theme }) => theme.border.radius.main};
  margin-bottom: ${({ theme }) => theme.spacing.space20};
  width: 100%;

  button {
    width: 35px !important;
    height: 35px !important;
    padding: ${({ theme }) => theme.spacing.space8};
    margin: ${({ theme }) => theme.spacing.space8};
    border-radius: 50%;
  }
`;

export const Counter = styled.p`
  padding: 0;
  margin: 0;
`;
