import React, { useContext } from "react";
import { CartContext } from "../../../context/cartContext";
import Button from "../../common/button";
import CartItem from "../cart-item";
import { ContainerList, CartContent } from "./styles";

const Cart = () => {
  const { cartList, clearCart } = useContext(CartContext);

  console.log(cartList);

  return (
    <CartContent>
      <Button onClick={clearCart}>Eliminar Carrito</Button>
      <ContainerList>
        {cartList.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </ContainerList>
    </CartContent>
  );
};

export default Cart;
