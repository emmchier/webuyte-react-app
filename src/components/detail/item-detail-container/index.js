import React from "react";
import Button from "../../common/button";

import ItemDetail from "../item-detail";
import { Container } from "./styles";

const ItemDetailContainer = ({
  item = {},
  isDetailVisible,
  setIsDetailVisible,
}) => {
  return (
    <Container>
      <Button onClick={() => setIsDetailVisible(!isDetailVisible)}>
        Volver
      </Button>
      <ItemDetail {...item} />
    </Container>
  );
};

export default ItemDetailContainer;
