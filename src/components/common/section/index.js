import React from "react";

import Container from "../container";
import { Content } from "./styles";

const Section = ({ children }) => (
  <Content>
    <Container>{children}</Container>
  </Content>
);

export default Section;
