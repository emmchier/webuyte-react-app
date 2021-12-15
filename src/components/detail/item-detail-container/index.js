import { doc, getDoc, getFirestore } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { CartContext } from "../../../context/cartContext";
import { getItemById } from "../../../firebase";
import Section from "../../common/section";
import ItemDetail from "../item-detail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { itemId } = useParams();
  const { addProductToCart } = useContext(CartContext);

  useEffect(() => {
    const ref = getItemById("items", itemId);
    getDoc(ref).then(
      (snapShot) => snapShot.exists() && setProduct(snapShot.data())
    );
  }, [itemId]);

  return (
    <Section>
      <ItemDetail item={product} addProductToCart={addProductToCart} />
    </Section>
  );
};

export default ItemDetailContainer;
