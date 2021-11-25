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

const ItemDetail = ({
  pictureUrl = "https://cdn.shopify.com/s/files/1/0083/7130/6547/products/old_atlanta_red_-_front_grande.png?v=1567096230",
  title = "Nombre",
  price = "350",
  description = "Lalalalalla",
}) => {
  // const {
  //   pictureUrl = "https://cdn.shopify.com/s/files/1/0083/7130/6547/products/old_atlanta_red_-_front_grande.png?v=1567096230",
  //   title = "Nombre",
  //   price = "350",
  //   description = "Lalalalalla",
  // } = item;

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
