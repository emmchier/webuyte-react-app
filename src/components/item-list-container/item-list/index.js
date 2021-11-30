import React from "react";
import Item from "../item";

import { List } from "./styles";

const ItemList = ({ items }) => {
  return (
    <List>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </List>
  );
};

export default ItemList;
