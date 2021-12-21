import React, { useContext } from "react";

import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../../context/cartContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import { useForm } from "../../../hooks/useForm";

import Button from "../../common/button";
import BackToList from "../back-to-list";
import CartItem from "../cart-item";
import Form from "../../common/form/Form";

import {
  ContainerList,
  CartContent,
  TotalPrice,
  CartActions,
  MainContainer,
  CartListContainer,
  BuyDataContainer,
} from "./styles";

const Cart = () => {
  const navigate = useNavigate();

  const {
    cartList,
    cartUnities,
    cartTotalPrice,
    removeProductFromCart,
    clearCart,
  } = useContext(CartContext);

  const [formValues, handleInputChange] = useForm({
    userName: "",
    userEmail: "",
    userPhone: "",
  });

  const { userName, userEmail, userPhone } = formValues;

  const uploadNewOrder = (e) => {
    e.preventDefault();
    if (
      userName.trim() !== "" &&
      userEmail.trim() !== "" &&
      userPhone.trim() !== ""
    ) {
      createOrder();
    } else {
      alert("Ocurrió un error. Te pedimos que vuelvas a repetir la compra.");
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
      alert(`
        ¡FELICIDADES POR TU COMPRA!\n 
        Para realizar el seguimiento de tu compra,\n 
        tunúmero de pedido es:\n${response.id}`);
      clearCart();
      navigate("/");
    });
  };

  return (
    <CartContent>
      {cartUnities > 0 ? (
        <MainContainer>
          <CartListContainer>
            <CartActions>
              <Link to="/">
                <Button variant="text">Volver a la tienda</Button>
              </Link>
              <span> / </span>
              <Button variant="text" onClick={clearCart}>
                Eliminar Carrito
              </Button>
            </CartActions>
            <ContainerList>
              {cartList.map((product) => (
                <CartItem
                  key={product.id}
                  product={product}
                  removeProductFromCart={removeProductFromCart}
                />
              ))}
            </ContainerList>
          </CartListContainer>
          <BuyDataContainer>
            <TotalPrice>Precio Total: {`$${cartTotalPrice}`}</TotalPrice>
            <h4>Ingresá los datos de tu compra</h4>
            <Form
              handleSubmit={(e) => uploadNewOrder(e)}
              formValues={formValues}
              handleInputChange={handleInputChange}
            />
          </BuyDataContainer>
        </MainContainer>
      ) : (
        <BackToList />
      )}
    </CartContent>
  );
};

export default Cart;
