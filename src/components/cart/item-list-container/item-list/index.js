import React from "react";
import ItemCountProduct from "../../item-count-product";
import { Content, Image, ProductInfo, Title, ImageContainer } from "./styles";

const ItemList = ({ title, image, alt, counterCart, setCounterCart }) => {
  return (
    <Content>
      <ImageContainer>
        <Image src={image} alt={alt} />
      </ImageContainer>
      <ProductInfo>
        <Title>{title}</Title>
        <ItemCountProduct
          title={title}
          counterCart={counterCart}
          setCounterCart={setCounterCart}
        />
      </ProductInfo>
    </Content>
  );
};

export default ItemList;
