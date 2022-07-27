import React, { useContext } from 'react';

import Section from '../../components/atomic-design/atoms/section';
import ShoppingList from '../../components/atomic-design/organisms/shopping/shopping-list';
import { CartContext } from '../../context';

const ShoppingsPage = () => {
  const { loadingOrders, orders } = useContext(CartContext);
  console.log(orders);

  return (
    <Section>{loadingOrders ? <h4>Cargando...</h4> : <ShoppingList items={orders} />}</Section>
  );
};

export default ShoppingsPage;
