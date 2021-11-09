import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.space8};
  border: 1px solid ${({ theme }) => theme.color.grey};
  border-radius: ${({ theme }) => theme.border.radius.main};
  margin-bottom: ${({ theme }) => theme.spacing.space10};

  button {
    width: 35px;
    height: 35px;
    padding: ${({ theme }) => theme.spacing.space8};
    border-radius: 50%;
  }
`;

export const Counter = styled.p`
  padding: 0;
  margin: 0;
`;
