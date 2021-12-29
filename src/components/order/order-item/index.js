import React from "react";
import { Link } from "react-router-dom";
import Button from "../../common/button";
import { Content, Title, Quantity, InfoContent, Info } from "./styles";

const OrderItem = ({ order }) => {
  const { buyer, cartList, date, total } = order;
  const { userEmail, userName, userPhone } = buyer;
  console.log(date);

  return (
    <Content>
      <InfoContent>
        <Info>
          <Title>{userEmail}</Title>
          <Title>{userName}</Title>
          <Title>{userPhone}</Title>
          <ul>
            {cartList.map((order) => (
              <li key={order.id}>
                <Quantity>{order.id}</Quantity>
                <Quantity>{order.title}</Quantity>
                <Quantity>{order.quantity}</Quantity>
                <Link to={`/item/${order.id}`}>
                  <Button>Ver compra</Button>
                </Link>
              </li>
            ))}
          </ul>
          <Quantity>TOTAL: {total}</Quantity>
        </Info>
      </InfoContent>
    </Content>
  );
};

export default OrderItem;
