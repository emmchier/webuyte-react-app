import styled from "styled-components";

export const BackButton = styled.div`
  button {
    padding: ${({ theme }) => theme.spacing(5)};
    position: fixed;

    &:hover {
      text-decoration: none;
    }

    span {
      width: 24px;
      margin-right: ${({ theme }) => theme.spacing(5)};
    }
  }
`;
