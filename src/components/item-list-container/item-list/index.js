import React from "react";
import Item from "../item";

import { List } from "./styles";

const ItemList = ({ items, isDetailVisible, setIsDetailVisible }) => {
  return (
    <List>
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          isDetailVisible={isDetailVisible}
          setIsDetailVisible={setIsDetailVisible}
        />
      ))}
    </List>
  );
};

export default ItemList;
