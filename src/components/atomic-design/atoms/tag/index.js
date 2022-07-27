import React from "react";

import { Content, Title } from "./styles";

const Tag = ({
  title,
  color = "#E24B75",
  weight = "regular",
  cap = "default",
}) => {
  return (
    <Content color={color} weight={weight} cap={cap}>
      <Title>{title}</Title>
    </Content>
  );
};

export default Tag;
