import React from "react";
import Button from "../../common/button";
import {
  Content,
  Price,
  Title,
  Quantity,
  ProductImg,
  InfoContent,
  Info,
  Action,
} from "./styles";

const CartItem = ({ product, removeProductFromCart }) => {
  return (
    <Content>
      <ProductImg src={product.pictureUrl} alt={`Imágen de ${product.title}`} />
      <InfoContent>
        <Info>
          <Title>{product.title}</Title>
          <Price>{product.price}</Price>
          <Quantity>{product.stock}</Quantity>
        </Info>
        <Action>
          <Button onClick={() => removeProductFromCart(product.id)}>
            Eliminar Carrito
          </Button>
        </Action>
      </InfoContent>
    </Content>
  );
};

export default CartItem;
