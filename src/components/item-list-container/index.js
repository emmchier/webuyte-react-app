import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { CartContext } from "../../context/cartContext";
import ItemList from "./item-list";

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const { cartList, setCartList, addProductToCart } = useContext(CartContext);
  console.log(cartList);

  useEffect(() => {
    const products = new Promise((resolve, reject) => {
      if (cartList !== null) {
        resolve(
          categoryId
            ? cartList.filter((product) => product.category === categoryId)
            : cartList
        );
      } else {
        reject("No hay productos");
      }
    });
    products.then((res) => setCartList(res)).catch((err) => console.log(err));
  }, []);

  return cartList.length === 0 ? (
    <h4>Cargando...</h4>
  ) : (
    <ItemList items={cartList} addProductToCart={addProductToCart} />
  );
};

export default ItemListContainer;
