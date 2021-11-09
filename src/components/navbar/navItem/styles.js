import styled from "styled-components";

export const Item = styled.li`
  padding: 0;
  margin: 0;
  margin-right: ${({ theme }) => theme.spacing.space30};

  a {
    color: ${({ theme }) => theme.color.grey};
    font-size: ${({ theme }) => theme.font.size.secondary};
    transition: ${({ theme }) => theme.transition.main};

    &:hover {
      color: ${({ theme }) => theme.color.pallete.primary};
      transition: ${({ theme }) => theme.transition.main};
    }
  }
`;
