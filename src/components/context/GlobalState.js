import React, { useState, useReducer, useEffect } from "react";

import ShopContext from "./shop-context";
import { shopReducer, ADD_PRODUCT, REMOVE_PRODUCT } from "./reducers";

const GlobalState = props => {
  
  const[products,setProducts] = useState([]);
    
  /*useEffect(() => {
      fetch(
          "https://www.fruityvice.com/api/fruit/all",
          {
            method:"GET",
            mode: 'no-cors'
          })
    .then((res) => res.json())
    .then((json) => {
      setProducts(json)
    })
      
  })*/
  fetch("https://www.fruityvice.com/api/fruit/all")
    .then(response => response.json())
    .then(jsondata => setProducts(jsondata))
  
  // const [cart, setCart] = useState([]);
  const [cartState, dispatch] = useReducer(shopReducer, { cart: [] });

  const addProductToCart = product => {
    setTimeout(() => {
      // setCart(updatedCart);
      dispatch({ type: ADD_PRODUCT, product: product });
    }, 700);
  };
  

  const removeProductFromCart = productId => {
    setTimeout(() => {
      // setCart(updatedCart);
      dispatch({ type: REMOVE_PRODUCT, productId: productId });
    }, 700);
  };

  return (
    <ShopContext.Provider
      value={{
        products: products,
        cart: cartState.cart,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart,
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};

export default GlobalState;
