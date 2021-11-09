import React from "react";
import { Content, Counter, Icon } from "./styles";

const CartWidget = ({ count = 0 }) => {
  return (
    <Content>
      <Icon className="material-icons">shopping_cart</Icon>
      <Counter>{count}</Counter>
    </Content>
  );
};

export default CartWidget;
