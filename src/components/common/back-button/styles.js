import styled from "styled-components";

export const Content = styled.div`
  button {
    color: ${({ theme }) => theme.color.text.secondary};

    &:hover {
      text-decoration: none;
      color: ${({ theme }) => theme.color.pallete.primaryLight};

      span {
        color: ${({ theme }) => theme.color.pallete.primaryLight};
      }
    }

    span {
      font-size: ${({ theme }) => theme.font.medium.size};
      color: ${({ theme }) => theme.color.text.secondary};
      width: ${({ theme }) => theme.font.medium.size};
      margin-right: ${({ theme }) => theme.spacing(1)};
    }
  }
`;
