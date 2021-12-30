import React from "react";

import Button from "../../common/button";
import Heading from "../../common/heading";
import Text from "../../common/text";
import { HorizontalContent } from "../../detail/item-detail/styles";
import {
  Content,
  ProductImg,
  InfoContent,
  Info,
  Action,
  PriceContainer,
  GeneralInfo,
} from "./styles";

const CartItem = ({ product, removeProductFromCart }) => {
  const { id, pictureUrl, title, variety, category, price, quantity } = product;

  return (
    <Content>
      <ProductImg src={pictureUrl} alt={`Imágen de ${title}`} />
      <GeneralInfo>
        <InfoContent>
          <Info>
            <Heading variant="h4">{title}</Heading>
            <HorizontalContent>
              <Text>{variety && variety}</Text>
              <span> | </span>
              <Text cap="cap">{category && category.slice(0, -1)}</Text>
            </HorizontalContent>
          </Info>
          <PriceContainer>
            <Text>$ {price && (price / 6).toFixed(2)}</Text>
          </PriceContainer>
        </InfoContent>
        <InfoContent>
          <Action>
            <Button variant="text" onClick={() => removeProductFromCart(id)}>
              Eliminar Producto
            </Button>
          </Action>
          <Text>Unidades ({quantity})</Text>
        </InfoContent>
      </GeneralInfo>
    </Content>
  );
};

export default CartItem;
