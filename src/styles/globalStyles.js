import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body,
  html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow-x: hidden;
    font-family: "Raleway", sans-serif;
    background-color: #EDEDED;
    color: #383838;
    font-size: 16px;
  }

  * {
    text-decoration: none;
    list-style: none;
  }

  ul {
    padding: 0;
  }

  a {
    list-style: none;
    text-decoration: none;
  }

  .disabled {
    pointer-events: none !important;
    cursor: initial !important;
  }
`;
