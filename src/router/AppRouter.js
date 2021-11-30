import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "../components/navbar";

import HomePage from "../pages/home";
import ItemListContainer from "../components/item-list-container";
import ItemDetailContainer from "../components/detail/item-detail-container";
import AboutPage from "../pages/about";
import ContactPage from "../pages/contact";
import CartPage from "../pages/cart";

import { Body } from "./styles";

export const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Body>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route
            exact
            path="/category/:categoryId"
            element={<ItemListContainer />}
          />
          <Route exact path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route exact path="/nosotros" element={<AboutPage />} />
          <Route exact path="/escribinos" element={<ContactPage />} />
          <Route exact path="/cart" element={<CartPage />} />
        </Routes>
      </Body>
    </Router>
  );
};
