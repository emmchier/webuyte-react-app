import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { wineList } from "../../../domain/wineDataList";

import ItemDetail from "../item-detail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { itemId } = useParams();

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

  return <ItemDetail item={product} />;
};

export default ItemDetailContainer;
