import React, { useContext } from "react";

import { Content, Counter, Icon } from "./styles";
import { CartContext } from "../../../context/cartContext";
import { NavLink } from "react-router-dom";

const CartWidget = () => {
  const { cartUnities } = useContext(CartContext);

  return (
    <>
      {cartUnities > 0 && (
        <NavLink to="/cart">
          <Content>
            <Icon className="material-icons">shopping_cart</Icon>
            <Counter>{cartUnities}</Counter>
          </Content>
        </NavLink>
      )}
    </>
  );
};

export default CartWidget;
