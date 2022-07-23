import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from '../components/navbar';

import HomePage from '../pages/home';
import FavouritesPage from '../pages/favourites';
import CartPage from '../pages/cart';
import OrderDetailPage from '../components/order';

import ItemListContainer from '../components/item-list-container';
import ItemDetailContainer from '../components/detail/item-detail-container';
import BuyListContainer from '../components/buy-list-container';

import { Body } from './styles';

export const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Body>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/mi-carrito" element={<CartPage />} />
          <Route exact path="/favoritos" element={<FavouritesPage />} />
          <Route exact path="/:categoryId" element={<ItemListContainer />} />
          <Route exact path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route exact path="/compra/:orderId" element={<OrderDetailPage />} />
          <Route exact path="/mis-compras" element={<BuyListContainer />} />
        </Routes>
      </Body>
    </Router>
  );
};
