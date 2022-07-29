import { collection, getDocs } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { CartContext } from '../context';
import { db } from '../firebase';

export const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const [orders, setOrders] = useState([]);
  const [cartUnities, setCartUnities] = useState(0);
  const [order, setOrder] = useState({});
  const [cartTotalPrice, setCartTotalPrice] = useState(0);
  const [loadingCart, setLoadingCart] = useState(false);
  const [loadingOrders, setLoadingOrders] = useState(false);
  const [isEmptyCart, setIsEmptyCart] = useState(true);
  const [openCartDropdown, setOpenCartDropdown] = useState(false);

  useEffect(() => {
    setLoadingCart(true);
    const items = collection(db, 'orders');
    getDocs(items)
      .then(({ docs }) => {
        const orderList = docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setOrders(orderList);
      })
      .finally(() => setLoadingCart(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    console.log('cambio');
  }, []);

  const getProductById = (productId) => cartList.find((item) => item.id === productId);

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
        loadingCart,
        setLoadingCart,
        order,
        setOrder,
        orders,
        setOrders,
        loadingOrders,
        setLoadingOrders,
        isEmptyCart,
        setIsEmptyCart,
        openCartDropdown,
        setOpenCartDropdown,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
