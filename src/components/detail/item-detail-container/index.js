import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { CartContext } from "../../../context/cartContext";
import { wineList } from "../../../domain/wineDataList";
import Section from "../../common/section";

import ItemDetail from "../item-detail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { itemId } = useParams();
  const { addProductToCart } = useContext(CartContext);

  useEffect(() => {
    const product = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(
          itemId
            ? wineList.find((product) => product.itemId === parseInt(itemId))
            : reject("Hubo un error. Por favor volvé a internarlo")
        );
      }, 2000);
    });
    product.then((res) => setProduct(res)).catch((err) => console.log(err));
  }, [itemId]);

  return (
    <Section>
      <ItemDetail item={product} addProductToCart={addProductToCart} />
    </Section>
  );
};

export default ItemDetailContainer;
