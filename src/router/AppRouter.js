import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/atomic-design/molecules/navbar';
import BuyNow from '../pages/buy';
import CartPage from '../pages/cart';
import FavouritesPage from '../pages/favourites';
import HomePage from '../pages/home';
import OrderDetailPage from '../pages/order';
import ProductDetailPage from '../pages/product-detail';
import PromosPage from '../pages/promos';
import ShoppingsPage from '../pages/shoppings';

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
          <Route exact path="/:categoryId" element={<HomePage />} />
          <Route exact path="/item/:itemId" element={<ProductDetailPage />} />
          <Route exact path="/compra/:orderId" element={<OrderDetailPage />} />
          <Route exact path="/mis-compras" element={<ShoppingsPage />} />
          <Route exact path="/promociones" element={<PromosPage />} />
          <Route exact path="/comprar-ahora" element={<BuyNow />} />
        </Routes>
      </Body>
    </Router>
  );
};
