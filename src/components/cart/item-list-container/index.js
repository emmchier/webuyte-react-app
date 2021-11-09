import React from "react";
import ItemList from "./item-list";
import { List } from "./styles";

const ItemListContainer = ({ itemList, counterCart, setCounterCart }) => {
  return (
    <List>
      {itemList.map((item) => (
        <ItemList
          key={item.id}
          image={item.image}
          alt={item.title}
          title={item.title}
          counterCart={counterCart}
          setCounterCart={setCounterCart}
        />
      ))}
    </List>
  );
};

export default ItemListContainer;
