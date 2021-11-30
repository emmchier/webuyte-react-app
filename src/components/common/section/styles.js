import styled from "styled-components";

export const Content = styled.section`
  margin: 0;
  padding: 0;
`;

export const BackButton = styled.div`
  button {
    padding: 10px;
    position: fixed;

    &:hover {
      text-decoration: none;
    }

    span {
      width: 24px;
      margin-right: 10px;
    }
  }
`;
