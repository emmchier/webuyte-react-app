import React, { useContext } from "react";

import { Content, Counter } from "./styles";
import { CartContext } from "../../../context/cartContext";
import { NavLink } from "react-router-dom";
import { GlassEmptyIcon, GlassFullIcon } from "../../../ui/icons";

const CartWidget = () => {
  const { cartUnities } = useContext(CartContext);

  return (
    <NavLink to={cartUnities > 0 ? "/mi-carrito" : ""}>
      <Content>
        {cartUnities > 0 ? (
          <>
            <GlassFullIcon />
            <Counter>{cartUnities}</Counter>
          </>
        ) : (
          <GlassEmptyIcon />
        )}
      </Content>
    </NavLink>
  );
};

export default CartWidget;
