import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../../context/cartContext";
import Button from "../../common/button";
import Section from "../../common/section";

const OrderDetailPage = () => {
  const navigate = useNavigate();
  const { order, setOrder } = useContext(CartContext);
  const { id } = order;
  console.log(order);

  const closeOrder = () => {
    setOrder({});
    navigate("/");
  };

  return (
    <Section>
      <p>
        ¡FELICIDADES POR TU COMPRA!\n Para realizar el seguimiento de tu compra,
        tu número de pedido es: {id}
      </p>
      <Button ariaLabel="link" onClick={closeOrder}>
        Seguir comprando
      </Button>
    </Section>
  );
};

export default OrderDetailPage;
