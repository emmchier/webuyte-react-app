import React, { useState } from "react";
import { Link } from "react-router-dom";
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
  Category,
} from "./styles";

const Item = ({ item }) => {
  const {
    itemId,
    pictureUrl,
    alt,
    title,
    description,
    price,
    category,
    stock,
  } = item;
  const [initial, setInitial] = useState(1);
  console.log(item);

  return (
    <Content>
      <ImageContainer>
        <Image src={pictureUrl} alt={alt} />
      </ImageContainer>
      <ProductInfo>
        <Category>{category}</Category>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Price>{`$${price}`}</Price>
        <StockContainer>
          {stock > 0 ? `${stock} unidades disponibles` : "No hay stock"}
        </StockContainer>
        <ItemCount stock={stock} initial={initial} setInitial={setInitial} />
        <ActionButtons>
          <Link to={`/item/${itemId}`}>
            <Button variant="outlined">Ver detalle</Button>
          </Link>
          <Button variant="contained">Agregar al carrito</Button>
        </ActionButtons>
      </ProductInfo>
    </Content>
  );
};

export default Item;
