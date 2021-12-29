import React from "react";
import OrderItem from "../order-item";

import { List } from "./styles";

const OrderList = ({ orders }) => {
  console.log(orders);
  return (
    <div className="animate__animated animate__fadeIn">
      <h3>Mis compras</h3>
      <List>
        {orders.map((order) => (
          <OrderItem order={order} />
        ))}
      </List>
    </div>
  );
};

export default OrderList;
