import React from "react";
import Cart from "../../components/cart/cart-list";
import Section from "../../components/common/section";

const CartPage = () => {
  return (
    <Section className="animate__animated animate__fadeIn">
      <Cart />
    </Section>
  );
};

export default CartPage;
