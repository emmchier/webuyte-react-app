import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "../components/navbar";

import HomePage from "../pages/home";
import ItemListContainer from "../components/item-list-container";
import ItemDetailContainer from "../components/detail/item-detail-container";
import CartPage from "../pages/cart";
import SalesPage from "../pages/sales";

import { Body } from "./styles";

export const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Body>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/:categoryId" element={<ItemListContainer />} />
          <Route exact path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route exact path="/mis-compras" element={<SalesPage />} />
          <Route exact path="/mi-carrito" element={<CartPage />} />
        </Routes>
      </Body>
    </Router>
  );
};
