import { useEffect, useState } from "react";
import { CartContext } from "../context/cartContext";
import { getCollection } from "../firebase";
import { getDocs } from "firebase/firestore";

export const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  console.log(cartList);
  console.log(categoryList);

  useEffect(() => {
    const ref = getCollection("items");
    getDocs(ref).then((snapShot) => {
      const list = snapShot.docs.map((doc) => doc.data());
      setCartList(list);
    });
  }, []);

  useEffect(() => {
    const ref = getCollection("categories");
    getDocs(ref).then((snapShot) => {
      const list = snapShot.docs.map((doc) => doc.data());
      setCategoryList(list);
    });
  }, []);

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
      value={{
        cartList,
        setCartList,
        categoryList,
        setCategoryList,
        addProductToCart,
        getProductById,
        addNewProduct,
        removeProductFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
