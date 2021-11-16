import React, { useState } from "react";

import { getData } from "../../actions";
import ItemList from "./item-list";

const wineList = [
  {
    id: 0,
    pictureUrl:
      "https://cdn.shopify.com/s/files/1/0083/7130/6547/products/old_atlanta_red_-_front_grande.png?v=1567096230",
    title: "Vino 1",
    description:
      "Bottle your wine faster & easier for commercial sales. Talk to our team today & learn how. Custom machines can handle virtually any size or shape bottle.",
    price: "350",
  },
  {
    id: 1,
    pictureUrl:
      "https://cdn.shopify.com/s/files/1/0083/7130/6547/products/old_atlanta_red_-_front_grande.png?v=1567096230",
    title: "Vino 2",
    description:
      "Bottle your wine faster & easier for commercial sales. Talk to our team today & learn how. Custom machines can handle virtually any size or shape bottle.",
    price: "350",
  },
  {
    id: 2,
    pictureUrl:
      "https://cdn.shopify.com/s/files/1/0083/7130/6547/products/old_atlanta_red_-_front_grande.png?v=1567096230",
    title: "Vino 3",
    description:
      "Bottle your wine faster & easier for commercial sales. Talk to our team today & learn how. Custom machines can handle virtually any size or shape bottle.",
    price: "350",
  },
  {
    id: 3,
    pictureUrl:
      "https://cdn.shopify.com/s/files/1/0083/7130/6547/products/old_atlanta_red_-_front_grande.png?v=1567096230",
    title: "Vino 4",
    description:
      "Bottle your wine faster & easier for commercial sales. Talk to our team today & learn how. Custom machines can handle virtually any size or shape bottle.",
    price: "350",
  },
];

const ItemListContainer = () => {
  const [productList, setProductList] = useState([]);

  getData(wineList)
    .then((res) => setProductList(res))
    .catch((err) => console.log(err));

  return productList.length === 0 ? (
    <h4>Cargando...</h4>
  ) : (
    <ItemList items={productList} />
  );
};

export default ItemListContainer;
