import React from "react";
import { List } from "./styles";

const ItemListContainer = ({ greeting }) => {
  return (
    <List>
      <li>{greeting}</li>
    </List>
  );
};

export default ItemListContainer;
