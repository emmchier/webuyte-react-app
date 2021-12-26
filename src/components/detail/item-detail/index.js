import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../common/button";
import ItemCount from "../../item-count";
import Tag from "../../common/tag";

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
  Adjust,
  List,
  ItemBuyContent,
} from "./styles";
import { Col, Container, Row } from "react-grid-system";
import Item from "../../item-list-container/item";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../firebase";

const ItemDetail = ({ item }) => {
  const {
    id,
    pictureUrl,
    title,
    price,
    description,
    stock,
    category,
    isNew,
    cellar,
  } = item;
  const [productCount, setProductCount] = useState(0);
  const [count, setCount] = useState(1);
  const [actions, setActions] = useState(false);
  const [isCounterVisible, setIsCounterVisible] = useState(true);
  const [addBtnDisabled, setAddBtnDisabled] = useState(false);
  const [finishBtnDisabled, setfinishBtnDisabled] = useState(true);
  const [relatedProducts, setRelatedProducts] = useState([]);

  const { addProductToCart, removeProductFromCart } = useContext(CartContext);

  const onAdd = () => {
    addProductToCart(item, count);
    setProductCount(productCount);
    setIsCounterVisible(!isCounterVisible);
    setfinishBtnDisabled(!finishBtnDisabled);
    setActions(!actions);
  };

  const onReset = () => {
    removeProductFromCart(id);
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

  useEffect(() => {
    const items = id
      ? query(collection(db, "items"), where("cellar", "==", cellar))
      : collection(db, "items");
    getDocs(items).then(({ docs }) => {
      const ref = docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      const related = ref.filter((item) => item.id !== id);
      setRelatedProducts(related);
    });
  }, [cellar, id]);

  return (
    <>
      <Content>
        <Container component={Adjust}>
          <Row>
            <Col xs={12} sm={12} md={3} lg={4}>
              <ImgContainer>
                <Image src={pictureUrl} alt={title} />
              </ImgContainer>
            </Col>
            <Col xs={12} sm={12} md={6} lg={5}>
              <ItemDataContent>
                {isNew && <Tag title="Nuevo" />}
                <Category>{category}</Category>
                <Name>{title}</Name>
                <Price>$ {price}</Price>
                <Description>{description}</Description>
              </ItemDataContent>
            </Col>
            <Col xs={12} sm={12} md={3} lg={3}>
              <ItemBuyContent>
                {isCounterVisible && (
                  <>
                    <StockContainer>
                      {stock > 0
                        ? `${stock} unidades disponibles`
                        : "No hay stock"}
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
                    <Link to="/mi-carrito">
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
              </ItemBuyContent>
            </Col>
          </Row>
        </Container>
      </Content>
      <Container component={Adjust}>
        <List>
          <Row gutterWidth={15}>
            {relatedProducts.map((item) => (
              <Col xs={12} sm={4} md={3} lg={2}>
                <Item key={id} item={item} />
              </Col>
            ))}
          </Row>
        </List>
      </Container>
    </>
  );
};

export default ItemDetail;
