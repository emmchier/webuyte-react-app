import { collection, getDocs } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../context/cartContext";
import { db } from "../../../firebase";
import Section from "../../common/section";

import OrderList from "../order-list";

const OrderListContainer = () => {
  const [orders, setOrders] = useState([]);
  console.log(orders);

  const { loading, setLoading } = useContext(CartContext);

  useEffect(() => {
    setLoading(true);
    const orderList = collection(db, "orders");
    getDocs(orderList)
      .then(({ docs }) => {
        const myOrders = docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setOrders(myOrders);
      })
      .finally(() => setLoading(false));
  }, [setOrders, setLoading]);

  return (
    <Section>
      {loading ? <h4>Cargando...</h4> : <OrderList orders={orders} />}
    </Section>
  );
};

export default OrderListContainer;
