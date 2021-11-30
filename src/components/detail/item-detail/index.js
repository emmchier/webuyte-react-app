import React from "react";
import {
  Container,
  Content,
  Description,
  Image,
  ImgContainer,
  ItemDataContainer,
  Name,
  Price,
} from "./styles";

const ItemDetail = ({ item }) => {
  const { pictureUrl, title, price, description } = item;

  return (
    <Container>
      <Content>
        <ImgContainer>
          <Image src={pictureUrl} alt={title} />
        </ImgContainer>
        <ItemDataContainer>
          <Name>{title}</Name>
          <Price>$ {price}</Price>
          <Description>{description}</Description>
        </ItemDataContainer>
      </Content>
    </Container>
  );
};

export default ItemDetail;
