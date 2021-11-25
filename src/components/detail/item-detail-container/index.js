import React from "react";
import Button from "../../common/button";

import ItemDetail from "../item-detail";
import { Container } from "./styles";

const ItemDetailContainer = ({
  isDetailVisible,
  setIsDetailVisible,
  itemDetailData,
}) => {
  return (
    <Container>
      <Button onClick={() => setIsDetailVisible(!isDetailVisible)}>
        Volver
      </Button>
      <ItemDetail item={itemDetailData} />
    </Container>
  );
};

export default ItemDetailContainer;
