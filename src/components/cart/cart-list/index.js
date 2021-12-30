import React, { useContext } from "react";

import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../../context/cartContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import { useForm } from "../../../hooks/useForm";

import Button from "../../common/button";
import CartItem from "../cart-item";

import {
  ContainerList,
  CartContent,
  TotalPrice,
  CartActions,
  BuyDataContainer,
  Adjust,
  HeaderCartContainer,
  CartGeneralInfo,
} from "./styles";

import Form from "../../common/form";
import EmptyList from "../../empty-list";
import { Col, Container, Row } from "react-grid-system";
import Heading from "../../common/heading";
import ListDivider from "../../common/list-divider";
import { StockContainer } from "../../detail/item-detail/styles";

const Cart = () => {
  const navigate = useNavigate();

  const {
    cartList,
    cartUnities,
    cartTotalPrice,
    removeProductFromCart,
    clearCart,
    setOrder,
  } = useContext(CartContext);

  const [formValues, handleInputChange] = useForm({
    userName: "",
    userEmail: "",
    userPhone: "",
    userConfirmPhone: "",
  });

  const { userName, userEmail, userPhone, userConfirmPhone } = formValues;

  const uploadNewOrder = (e) => {
    e.preventDefault();
    if (
      userName.trim() !== "" &&
      userEmail.trim() !== "" &&
      userPhone.trim() !== "" &&
      userConfirmPhone.trim() !== "" &&
      userPhone.trim() === userConfirmPhone.trim()
    ) {
      createOrder();
    } else {
      alert("Ocurrió un error. Alguno de los campos no es correcto.");
    }
  };

  const createOrder = () => {
    const date = new Date();
    const ref = collection(db, "orders");
    const newOrder = {
      buyer: { ...formValues },
      cartList,
      date: date,
      total: cartTotalPrice,
    };
    addDoc(ref, newOrder).then((response) => {
      setOrder(response);
      clearCart();
      navigate(`/compra/${response.id}`);
    });
  };

  const emptyDescription = [
    "Seguí buscando en nuestra",
    <span>tienda los mejores vinos</span>,
  ];

  return (
    <CartContent className="animate__animated animate__fadeIn">
      {cartUnities > 0 ? (
        <>
          <Container component={Adjust}>
            <HeaderCartContainer>
              <CartGeneralInfo>
                <Heading variant="h3">Mi Carrito</Heading>
                <span> | </span>
                <TotalPrice>
                  Precio TOTAL <span>{`$${cartTotalPrice}`}</span>
                </TotalPrice>
                <StockContainer>
                  Cantidad de productos (
                  <span>{cartUnities && cartUnities}</span>)
                </StockContainer>
              </CartGeneralInfo>
              <CartActions>
                <Link to="/">
                  <Button variant="text">Volver al listado</Button>
                </Link>
                <span> | </span>
                <Button variant="text" onClick={clearCart}>
                  Eliminar Carrito
                </Button>
              </CartActions>
            </HeaderCartContainer>
            <ListDivider />
            <Row>
              <Col xs={6} sm={4} md={3} lg={8}>
                <ContainerList>
                  {cartList.map((product) => (
                    <CartItem
                      key={product.id}
                      product={product}
                      removeProductFromCart={removeProductFromCart}
                    />
                  ))}
                </ContainerList>
              </Col>
              <Col xs={6} sm={4} md={3} lg={4}>
                <BuyDataContainer>
                  <h4>Ingresá los datos de tu compra</h4>
                  <Form
                    handleSubmit={(e) => uploadNewOrder(e)}
                    formValues={formValues}
                    handleInputChange={handleInputChange}
                  />
                </BuyDataContainer>
              </Col>
            </Row>
          </Container>
        </>
      ) : (
        <EmptyList
          title={"Tu carrito está vacío"}
          description={emptyDescription}
          isButton={true}
          buttonTitle="Volver al listado"
          to="/"
        />
      )}
    </CartContent>
  );
};

export default Cart;
