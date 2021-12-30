import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../common/button";
import ItemCount from "../../item-count";
import Tag from "../../common/tag";

import { CartContext } from "../../../context/cartContext";

import {
  Content,
  Image,
  ImgContainer,
  ItemCountContainer,
  CancelBtnContainer,
  FinishBtnContainer,
  ItemDataContent,
  Actions,
  StockContainer,
  TitlesContainer,
  Adjust,
  List,
  ItemBuyContent,
  HorizontalContent,
  PriceContainer,
  HeaderDetail,
  HeaderInfo,
  ReservaContainer,
  PriceDetailContainer,
  Description,
  AddBtnContainer,
  MoreProductsContainer,
} from "./styles";

import { Col, Container, Row } from "react-grid-system";
import Item from "../../item-list-container/item";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../firebase";
import BackButton from "../../common/back-button";
import Heading from "../../common/heading";
import Text from "../../common/text";
import EmptyImg from "./../../../assets/empty-img.svg";
import { ReservaDetailIcon } from "../../../ui/icons";
import ListDivider from "../../common/list-divider";
import PaymentMethodList from "../../payment-method-list";

const ItemDetail = ({ item }) => {
  const {
    id,
    pictureUrl,
    title,
    price,
    description,
    stock,
    category,
    variety,
    isNew,
    isReserva,
    cellar,
    year,
    alcohol,
  } = item;
  const [productCount, setProductCount] = useState(0);
  const [count, setCount] = useState(1);
  const [actions, setActions] = useState(false);
  const [isCounterVisible, setIsCounterVisible] = useState(true);
  const [addBtnDisabled, setAddBtnDisabled] = useState(false);
  const [finishBtnDisabled, setfinishBtnDisabled] = useState(true);
  const [relatedProducts, setRelatedProducts] = useState([]);
  console.log(relatedProducts);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="animate__animated animate__fadeIn">
      <HeaderDetail>
        <HorizontalContent>
          <BackButton nav={-1} title="Volver" isIcon={true} />
          <span> | </span>
          <Link to="/">Ir al listado</Link>
        </HorizontalContent>
      </HeaderDetail>
      <Content>
        <Container component={Adjust}>
          <Row>
            <Col xs={12} sm={12} md={3} lg={9}>
              <Row>
                <Col xs={12} sm={12} md={3} lg={5}>
                  <ImgContainer>
                    <Image
                      src={pictureUrl ? pictureUrl : EmptyImg}
                      alt={title && title}
                    />
                  </ImgContainer>
                </Col>
                <Col xs={12} sm={12} md={6} lg={7}>
                  <ItemDataContent>
                    <HeaderInfo>
                      <HorizontalContent>
                        <Text>{variety && variety}</Text>
                        <span> | </span>
                        <Text cap="cap">
                          {category && category.slice(0, -1)}
                        </Text>
                        {isNew && <Tag title="Nuevo" />}
                      </HorizontalContent>
                      <ListDivider />
                    </HeaderInfo>
                    {isReserva && (
                      <ReservaContainer>
                        <ReservaDetailIcon />
                        <Text>Reserva</Text>
                      </ReservaContainer>
                    )}
                    <TitlesContainer>
                      <Heading variant="h5">{title && title}</Heading>
                      <Heading variant="h6">Bodegas {cellar && cellar}</Heading>
                    </TitlesContainer>
                    <PriceDetailContainer>
                      <Text weight="semiBold">{`$ ${price && price}`}</Text>
                      <Text>x unidad</Text>
                      <Text weight="semiBold">{`$ ${
                        price && price * 6 - 200
                      }`}</Text>
                      <Text>caja x 6 botellas</Text>
                      <ListDivider />
                    </PriceDetailContainer>
                    <Description>
                      <Text>{description}</Text>
                    </Description>
                    <Text>Cosecha: {year}</Text>
                    <Text>Alcohol: {alcohol}%</Text>
                  </ItemDataContent>
                </Col>
              </Row>
            </Col>
            <Col xs={12} sm={12} md={3} lg={3}>
              <ItemBuyContent>
                {stock > 0 ? (
                  <>
                    <Text>Cada unidad</Text>
                    <Heading variant="h5">6 cuotas sin interés</Heading>
                    <PriceContainer>
                      <Text>
                        x <span>$ {price && (price / 6).toFixed(2)} </span>
                      </Text>
                      <Text>00</Text>
                    </PriceContainer>
                    <Heading variant="h6">Métodos de pago</Heading>
                    <PaymentMethodList />
                    {isCounterVisible && (
                      <>
                        <StockContainer>
                          Stock disponible (<span>{stock && stock}</span>)
                        </StockContainer>
                        <ItemCountContainer>
                          <Text weight="medium">Cantidad</Text>
                          <ItemCount
                            stock={stock}
                            initial={count}
                            setInitial={setCount}
                          />
                        </ItemCountContainer>
                        <AddBtnContainer>
                          <Button
                            variant="outlined"
                            onClick={onAdd}
                            disabled={addBtnDisabled}
                          >
                            Agregar al carrito
                          </Button>
                        </AddBtnContainer>
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
                            Eliminar del carrito
                          </Button>
                        </CancelBtnContainer>
                      </Actions>
                    )}
                  </>
                ) : (
                  <>
                    <Text>No hay stock disponible. Repondremos en breve.</Text>
                    {relatedProducts.length > 1 && (
                      <Text>
                        Consultá por más productos de {cellar} al pie de éste
                        detalle.
                      </Text>
                    )}
                  </>
                )}
              </ItemBuyContent>
            </Col>
          </Row>
        </Container>
      </Content>
      <MoreProductsContainer>
        {relatedProducts.length > 0 && (
          <>
            <Heading variant="h4">Ver más productos de {cellar}</Heading>
            <Container component={Adjust}>
              <List>
                <Row gutterWidth={15}>
                  {relatedProducts.map((item) => (
                    <Col xs={6} sm={4} md={3} lg={2}>
                      <Item key={id} item={item} />
                    </Col>
                  ))}
                </Row>
              </List>
            </Container>
          </>
        )}
      </MoreProductsContainer>
    </div>
  );
};

export default ItemDetail;
