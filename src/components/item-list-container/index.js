import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { wineList } from "../../domain/wineDataList";
import ItemList from "./item-list";

const ItemListContainer = () => {
  const [productList, setProductList] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const products = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(
          categoryId
            ? wineList.filter((product) => product.category === categoryId)
            : wineList
        );
      }, 1000);
    });
    products
      .then((res) => setProductList(res))
      .catch((err) => console.log(err));
  }, [categoryId]);

  console.log(productList);

  return productList.length === 0 ? (
    <h4>Cargando...</h4>
  ) : (
    <ItemList items={productList} />
  );
};

export default ItemListContainer;
