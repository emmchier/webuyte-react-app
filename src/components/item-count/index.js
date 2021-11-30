import React, { useEffect, useState } from "react";
import Button from "../common/button";
import { Content, Counter } from "./styles";

const ItemCount = ({ stock, initial, setInitial }) => {
  const [disabled, setDisabled] = useState(false);

  const increment = (num) => initial < stock && setInitial(initial + num);

  const decrement = (num) => initial > 0 && setInitial(initial - num);

  useEffect(() => {
    stock > 1 ? setDisabled(false) : setDisabled(true);
  }, [stock]);

  return (
    <Content>
      <Button
        variant="outlined"
        onClick={() => increment(1)}
        disabled={disabled}
      >
        +
      </Button>
      <Counter>{initial}</Counter>
      <Button
        variant="outlined"
        onClick={() => decrement(1)}
        disabled={disabled}
      >
        -
      </Button>
    </Content>
  );
};

export default ItemCount;
