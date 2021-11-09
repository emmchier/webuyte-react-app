import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";

const MainTheme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MainTheme;
