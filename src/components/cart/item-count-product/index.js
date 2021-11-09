import React, { useState } from "react";
import Button from "../../common/button";
import ItemCount from "../../item-count";
import { Content } from "./styles";

const ItemCountProduct = ({ counterCart, setCounterCart }) => {
  const [count, setCount] = useState(1);

  return (
    <Content>
      <ItemCount count={count} setCount={setCount} />
      <Button
        variant="outlined"
        onClick={() => setCounterCart(counterCart + count)}
      >
        Agregar al carrito
      </Button>
    </Content>
  );
};

export default ItemCountProduct;
