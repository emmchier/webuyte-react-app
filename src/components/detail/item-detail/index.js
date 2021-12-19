import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../common/button";
import Section from "../../common/section";
import ItemCount from "../../item-count";

import { CartContext } from "../../../context/cartContext";

import {
  Content,
  Description,
  Image,
  ImgContainer,
  ItemDataContainer,
  Name,
  Price,
  ItemCountContainer,
  CancelBtnContainer,
  FinishBtnContainer,
  ItemDataContent,
  Actions,
  StockContainer,
  Category,
} from "./styles";

const ItemDetail = ({ item }) => {
  const { pictureUrl, title, price, description, stock, category } = item;
  const [productCount, setProductCount] = useState(0);
  const [count, setCount] = useState(0);
  const [actions, setActions] = useState(false);
  const [isCounterVisible, setIsCounterVisible] = useState(true);
  const [addBtnDisabled, setAddBtnDisabled] = useState(false);
  const [finishBtnDisabled, setfinishBtnDisabled] = useState(true);

  const { addProductToCart } = useContext(CartContext);

  const onAdd = () => {
    addProductToCart(item, count);
    setProductCount(productCount);
    setIsCounterVisible(!isCounterVisible);
    setfinishBtnDisabled(!finishBtnDisabled);
    setActions(!actions);
  };

  const onReset = () => {
    setIsCounterVisible(!isCounterVisible);
    setfinishBtnDisabled(!finishBtnDisabled);
    setActions(!actions);
  };

  useEffect(() => {
    if (count > 0) {
      setAddBtnDisabled(false);
    } else {
      setAddBtnDisabled(true);
    }
  }, [count]);

  return (
    <Section isBackButton={true}>
      <Content>
        <ImgContainer>
          <Image src={pictureUrl} alt={title} />
        </ImgContainer>
        <ItemDataContainer>
          <ItemDataContent>
            <Category>{category}</Category>
            <Name>{title}</Name>
            <Price>$ {price}</Price>
            <Description>{description}</Description>
            {isCounterVisible && (
              <>
                <StockContainer>
                  {stock > 0 ? `${stock} unidades disponibles` : "No hay stock"}
                </StockContainer>
                <ItemCountContainer>
                  <ItemCount
                    stock={stock}
                    initial={count}
                    setInitial={setCount}
                  />
                </ItemCountContainer>
                <Button
                  variant="outlined"
                  onClick={onAdd}
                  disabled={addBtnDisabled}
                >
                  Agregar al carrito
                </Button>
              </>
            )}

            {actions && (
              <Actions>
                <Link to="/cart">
                  <FinishBtnContainer>
                    <Button
                      ariaLabel="Finalizar Compra"
                      disabled={finishBtnDisabled}
                    >
                      Ver mi carrito
                    </Button>
                  </FinishBtnContainer>
                </Link>
                <CancelBtnContainer>
                  <Button
                    ariaLabel="Cancelar Compra"
                    disabled={finishBtnDisabled}
                    onClick={onReset}
                  >
                    Cancelar
                  </Button>
                </CancelBtnContainer>
              </Actions>
            )}
          </ItemDataContent>
        </ItemDataContainer>
      </Content>
    </Section>
  );
};

export default ItemDetail;
