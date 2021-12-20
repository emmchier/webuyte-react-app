import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/cartContext";
import Button from "../../common/button";
import BackToList from "../back-to-list";
import CartItem from "../cart-item";
import { collection, addDoc } from "firebase/firestore";

import {
  ContainerList,
  CartContent,
  TotalPrice,
  CartActions,
  MainContainer,
  CartListContainer,
  BuyDataContainer,
} from "./styles";
import { db } from "../../../firebase";

const Cart = () => {
  const {
    cartList,
    cartUnities,
    cartTotalPrice,
    removeProductFromCart,
    clearCart,
  } = useContext(CartContext);

  const [formData, setFormData] = useState({
    nombre: "",
    mail: "",
    confirmarMail: "",
    telefono: "",
  });

  const updateFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const finalizarCompra = (e) => {
    e.preventDefault();
    if (
      formData.nombre.trim() !== "" &&
      formData.mail.trim() !== "" &&
      formData.confirmarMail.trim() !== "" &&
      formData.telefono.trim() !== "" &&
      formData.mail === formData.confirmarMail
    ) {
      const date = new Date();
      const ref = collection(db, "orders");
      const myData = {
        buyer: { ...formData },
        cartList,
        date: date,
        total: cartTotalPrice,
      };
      addDoc(ref, myData).then((res) => {
        alert(`Tu numero de compra es ${res.id}`);
        clearCart();
      });
    } else {
      alert("Los datos no son correctos, ¡por favor revisarlos!");
    }
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
            <form onSubmit={(e) => finalizarCompra(e)}>
              <label>Nombre y apellido</label>
              <input
                type="text"
                value={formData.nombre}
                name="nombre"
                onChange={(e) => updateFormData(e)}
                required
              />
              <label>e-mail</label>
              <input
                type="mail"
                value={formData.mail}
                name="mail"
                onChange={(e) => updateFormData(e)}
                required
              />
              <label>Confirmar e-mail</label>
              <input
                type="mail"
                value={formData.confirmarMail}
                name="confirmarMail"
                onChange={(e) => updateFormData(e)}
                required
              />
              <label>Telefono</label>
              <input
                type="text"
                value={formData.telefono}
                name="telefono"
                onChange={(e) => updateFormData(e)}
                required
              />
              <Button type="submit">Comprar</Button>
            </form>
          </BuyDataContainer>
        </MainContainer>
      ) : (
        <BackToList />
      )}
    </CartContent>
  );
};

export default Cart;
