import React from "react";

import { Link } from "react-router-dom";
import Button from "../../common/button";
import { BackContent, BackTitle, Content } from "./styles";

const BackToList = () => {
  return (
    <Content>
      <BackContent>
        <BackTitle>Tu carrito está vacío...</BackTitle>
        <Link to="/">
          <Button>Volver a comprar</Button>
        </Link>
      </BackContent>
    </Content>
  );
};

export default BackToList;
