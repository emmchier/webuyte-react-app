import React, { useContext } from 'react';

import { CartContext } from '../../context';
import Section from '../common/section';
import BuyItemList from '../favourite-list-container/buy-list';

const BuyListContainer = () => {
  const { loadingOrders, orders } = useContext(CartContext);
  console.log(orders);

  return <Section>{loadingOrders ? <h4>Cargando...</h4> : <BuyItemList items={orders} />}</Section>;
};

export default BuyListContainer;
