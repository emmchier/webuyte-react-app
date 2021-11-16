import React, { useState } from "react";
import Button from "../../common/button";
import ItemCount from "../../item-count";
import {
  Content,
  Image,
  ProductInfo,
  Title,
  ImageContainer,
  Description,
  Price,
  StockContainer,
  ActionButtons,
} from "./styles";

const Item = ({ item }) => {
  const { pictureUrl, alt, title, description, price } = item;

  const [initial, setInitial] = useState(1);
  const [stock] = useState(5);

  return (
    <Content>
      <ImageContainer>
        <Image src={pictureUrl} alt={alt} />
      </ImageContainer>
      <ProductInfo>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Price>{`$${price}`}</Price>
        <StockContainer>
          {stock > 0 ? `${stock} unidades disponibles` : "No hay stock"}
        </StockContainer>
        <ItemCount stock={stock} initial={initial} setInitial={setInitial} />
        <ActionButtons>
          <Button variant="outlined">Ver detalle</Button>
          <Button variant="contained">Agregar al carrito</Button>
        </ActionButtons>
      </ProductInfo>
    </Content>
  );
};

export default Item;
