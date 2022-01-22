import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import GlobalState from "./components/context/GlobalState";
import ProductsPage from "./components/Products/Products";
import CartPage from "./components/Cart/Cart";
import "./App.css";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import Tab from "./components/Tab/Tab";
const App = props => {
  return (
    <>
    <div>
      <Header></Header>
    </div>
    <GlobalState>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductsPage></ProductsPage>} exact />
          <Route path="/cart" element={<CartPage></CartPage>} exact />
          <Route path="/nutricional-table" element={<Tab></Tab>} exact />
        </Routes>
      </BrowserRouter>
    </GlobalState>
    <div>
      <Footer></Footer>
    </div>
    </>
  );
};

export default App;
