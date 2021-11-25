import React, { useEffect, useState } from "react";

import { getData } from "../../actions";
import ItemList from "./item-list";

const ItemListContainer = ({ list, isDetailVisible, setIsDetailVisible }) => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getData(list)
      .then((res) => setProductList(res))
      .catch((err) => console.log(err));
  }, []);

  return productList.length === 0 ? (
    <h4>Cargando...</h4>
  ) : (
    <ItemList
      items={productList}
      isDetailVisible={isDetailVisible}
      setIsDetailVisible={setIsDetailVisible}
    />
  );
};

export default ItemListContainer;
