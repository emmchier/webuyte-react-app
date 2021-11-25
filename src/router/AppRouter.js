import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "../components/navbar";
import AboutPage from "../pages/about";
import ContactPage from "../pages/contact";

import HomePage from "../pages/home";

export const AppRouter = () => {
  const [counterCart, setCounterCart] = useState(0);

  return (
    <Router>
      <Navbar counter={counterCart} />
      <Routes>
        <Route
          exact
          path="/"
          element={<HomePage />}
          counterCart={counterCart}
          setCounterCart={setCounterCart}
        />
        <Route exact path="/category/:id" element={<HomePage />} />
        <Route exact path="/item/:id" element={<HomePage />} />
        <Route exact path="/nosotros" element={<AboutPage />} />
        <Route exact path="/escribinos" element={<ContactPage />} />
      </Routes>
    </Router>
  );
};
