import styled from "styled-components";

export const Item = styled.li`
  padding: 0;
  margin: 0;
  margin-right: ${({ theme }) => theme.spacing(10)};

  a {
    color: ${({ theme }) => theme.color.text.primary};
    font-size: ${({ theme }) => theme.font.small.size};
    line-height: ${({ theme }) => theme.font.small.lineHeight};
    transition: ${({ theme }) => theme.transition.main};

    &:hover {
      color: ${({ theme }) => theme.color.pallete.primaryLight};
      transition: ${({ theme }) => theme.transition.main};
    }
  }
`;
