import React from "react";
import { Content, Price, Title, Quantity } from "./styles";

const CartItem = ({ product }) => {
  return (
    <Content>
      <Title>{product.title}</Title>
      <Price>{product.price}</Price>
      <Quantity>{product.stock}</Quantity>
    </Content>
  );
};

export default CartItem;
