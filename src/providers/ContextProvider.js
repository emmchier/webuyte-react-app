import { useState } from "react";
import { CartContext } from "../context/cartContext";

export const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const [cartUnities, setCartUnities] = useState(0);
  const [order, setOrder] = useState({});
  const [cartTotalPrice, setCartTotalPrice] = useState(0);
  const [loading, setLoading] = useState(false);

  const getProductById = (productId) =>
    cartList.find((item) => item.id === productId);

  const cartActions = (setList, setTotal, setUnities) => {
    setCartList(setList);
    setCartTotalPrice(setTotal);
    setCartUnities(setUnities);
  };

  const addProductToCart = (product, quantity) => {
    const isProductInCart = getProductById(product.id);
    if (!isProductInCart) {
      cartActions(
        [
          ...cartList,
          {
            ...product,
            quantity: quantity,
            subtotal: product.price * quantity,
          },
        ],
        cartTotalPrice + product.price * quantity,
        cartUnities + quantity
      );
    } else {
      cartActions(
        cartList.map((item) => {
          if (item.id === product.id) {
            item.quantity += quantity;
            item.subtotal += product.price * quantity;
          }
          return item;
        }),
        cartTotalPrice + product.price * quantity,
        cartUnities + quantity
      );
    }
  };

  const removeProductFromCart = (productId) => {
    const productToRemove = getProductById(productId);
    cartActions(
      cartList.filter((item) => item.id !== productToRemove.id),
      cartTotalPrice - productToRemove.subtotal,
      cartUnities - productToRemove.quantity
    );
  };

  const clearCart = () => cartActions([], 0, 0);

  return (
    <CartContext.Provider
      value={{
        cartList,
        cartUnities,
        cartTotalPrice,
        addProductToCart,
        removeProductFromCart,
        clearCart,
        loading,
        setLoading,
        order,
        setOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
