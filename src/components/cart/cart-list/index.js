import React, { useContext } from "react";
import { CartContext } from "../../../context/cartContext";
import Button from "../../common/button";
import BackToList from "../back-to-list";
import CartItem from "../cart-item";
import { ContainerList, CartContent, TotalPrice, CartActions } from "./styles";

const Cart = () => {
  const {
    cartList,
    cartUnities,
    cartTotalPrice,
    removeProductFromCart,
    clearCart,
  } = useContext(CartContext);

  console.log(cartList);

  return (
    <CartContent>
      {cartUnities > 0 ? (
        <>
          <CartActions>
            <TotalPrice>Precio Total: {`$${cartTotalPrice}`}</TotalPrice>
            <Button onClick={clearCart}>Eliminar Carrito</Button>
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
        </>
      ) : (
        <BackToList />
      )}
    </CartContent>
  );
};

export default Cart;
