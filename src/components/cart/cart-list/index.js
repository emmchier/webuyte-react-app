import React, { useContext } from "react";
import { CartContext } from "../../../context/cartContext";
import Button from "../../common/button";
import BackToList from "../back-to-list";
import CartItem from "../cart-item";
import { ContainerList, CartContent, TotalPrice } from "./styles";

const Cart = () => {
  const {
    cartList,
    cartUnities,
    cartTotalPrice,
    removeProductFromCart,
    clearCart,
  } = useContext(CartContext);

  return (
    <CartContent>
      {cartUnities > 0 ? (
        <>
          <ContainerList>
            {cartList.map((product) => (
              <CartItem
                key={product.id}
                product={product}
                removeProductFromCart={removeProductFromCart}
              />
            ))}
          </ContainerList>
          <TotalPrice>Precio Total: {`$${cartTotalPrice}`}</TotalPrice>
          <Button onClick={clearCart}>Eliminar Carrito</Button>
        </>
      ) : (
        <BackToList />
      )}
    </CartContent>
  );
};

export default Cart;
