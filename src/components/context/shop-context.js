
import React from "react";
import GetProducts from "./GetProducts";

export default React.createContext({
  products: <GetProducts></GetProducts>,
  cart: [],
  addProductToCart: product => {},
  removeProductFromCart: productId => {},
});