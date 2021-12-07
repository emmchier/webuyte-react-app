import React from "react";
import Cart from "../../components/cart/cart-list";
import Section from "../../components/common/section";

const CartPage = () => {
  return (
    <Section isBackButton={true}>
      <Cart />
    </Section>
  );
};

export default CartPage;
