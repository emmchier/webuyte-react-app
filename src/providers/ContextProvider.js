import { useState } from "react";
import { CartContext } from "../context/cartContext";

export const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addProductToCart = (product, quantity) => {
    const productId = getProductById(product.id);
    if (productId) {
      cartList.map((item) => {
        if (item.id === product.id) {
          product.quantity = product.quantity + quantity;
        }
        return item;
      });
    } else {
      addNewProduct(product, quantity);
    }
  };

  const getProductById = (id) => {
    if (id !== null) {
      const product = cartList.find((item) => item.id === id);
      return product;
    } else {
      console.log("El producto no existe");
    }
  };

  const addNewProduct = (item, quantity) =>
    setCartList([...cartList, { ...item, quantity }]);

  const removeProductFromCart = (id) =>
    cartList.filter((product) => product.id !== id);

  const clearCart = () => setCartList([]);

  return (
    <CartContext.Provider
      value={{ cartList, addProductToCart, removeProductFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
