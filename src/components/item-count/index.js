import React from "react";
import Button from "../common/button";
import { Content, Counter } from "./styles";

const ItemCount = ({ count, setCount }) => {
  return (
    <Content>
      <Button variant="outlined" onClick={() => setCount(count + 1)}>
        +
      </Button>
      <Counter>{count}</Counter>
      <Button variant="outlined" onClick={() => setCount(count - 1)}>
        -
      </Button>
    </Content>
  );
};

export default ItemCount;
