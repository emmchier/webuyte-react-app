import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.color.grey.dark};
  border-radius: ${({ theme }) => theme.border.radius.main};
  width: 100%;

  button {
    ${({ theme }) => `padding: ${theme.spacing(1)} ${theme.spacing(4)}`};
    margin: ${({ theme }) => theme.spacing(3)};
    border-radius: ${({ theme }) => theme.border.radius.small};
    background-color: ${({ theme }) => theme.color.grey.dark};
    border: 1px solid ${({ theme }) => theme.color.grey.dark};
    color: ${({ theme }) => theme.color.text.primary};
    font-weight: ${({ theme }) => theme.font.weight.medium};
    font-size: ${({ theme }) => theme.font.medium.size};

    &:hover {
      background-color: ${({ theme }) => theme.color.pallete.primaryLight};
      border: 1px solid ${({ theme }) => theme.color.pallete.primaryLight};
      color: ${({ theme }) => theme.color.white};
    }
  }
`;

export const Counter = styled.p`
  padding: 0;
  margin: 0 !important;
`;
