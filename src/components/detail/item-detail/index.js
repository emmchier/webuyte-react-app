import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../common/button";
import ItemCount from "../../item-count";
import {
  Content,
  Description,
  Image,
  ImgContainer,
  ItemDataContainer,
  Name,
  Price,
  ItemCountContainer,
} from "./styles";

const ItemDetail = ({ item }) => {
  const { pictureUrl, title, price, description, stock } = item;
  const [productCount, setProductCount] = useState(0);
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);
  console.log(productCount);

  const onAdd = () => setProductCount(count);

  useEffect(() => {
    count > 0 ? setDisabled(false) : setDisabled(true);
  }, [count]);

  return (
    <Content>
      <ImgContainer>
        <Image src={pictureUrl} alt={title} />
      </ImgContainer>
      <ItemDataContainer>
        <Name>{title}</Name>
        <Price>$ {price}</Price>
        <Description>{description}</Description>
        <ItemCountContainer>
          <ItemCount stock={stock} initial={count} setInitial={setCount} />
        </ItemCountContainer>
        <Button variant="outlined" onClick={onAdd} disabled={disabled}>
          Agregar al carrito
        </Button>
        <Link to="/cart">
          <Button ariaLabel="Finalizar Compra" disabled={disabled}>
            Finalizar Compra
          </Button>
        </Link>
      </ItemDataContainer>
    </Content>
  );
};

export default ItemDetail;
