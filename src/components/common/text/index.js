import React from "react";
import { Paragraph } from "./styles";

const Text = ({ children, weight = "regular", cap = "default" }) => (
  <Paragraph weight={weight} cap={cap}>
    {children}
  </Paragraph>
);

export default Text;
