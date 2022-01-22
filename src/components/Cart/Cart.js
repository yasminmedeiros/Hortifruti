import { hover } from "@testing-library/user-event/dist/hover";
import React, { useContext, useEffect } from "react";
// import { connect } from 'react-redux';
import {MdAddCircleOutline,MdRemoveCircleOutline} from "react-icons/md";
import ShopContext from "../context/shop-context";
import MainNavigation from "../Menu/MainNavigation";
// import { removeProductFromCart } from '../store/actions';
import "./Cart.css";

const CartPage = props => {
  const context = useContext(ShopContext);
  useEffect(() => {
    console.log(context);
  }, []);
  function numItens(){
    let numItens = 0;
    context.cart.map(cartItem=>{
    numItens += cartItem.quantity
    });
    if(numItens>0){
      numItens*=5.99
      return <h3>Total:{numItens.toFixed(2)} </h3>;
    }
  }
  console.log(numItens)
  return (
    <React.Fragment>
      <MainNavigation
        cartItemNumber={context.cart.reduce((count, curItem) => {
          return count + curItem.quantity;
        }, 0)}
      />
      <div className="container">
        <main className="cart">
          <h1>CART</h1>
          {context.cart.length <= 0 && <p>No Item in the Cart!</p>}
          <ul>
            {context.cart.map(cartItem => (
              
              <li key={cartItem.id}>
                
                <ul >
                  <div className="itenInfo" ><img style={{border:'5px solid black', borderRadius:'100%'}} width='150vh' height='80vh' src={require('../../../public/images/fruits/' +cartItem.name +'.jpeg')}/></div>
                  <div className="itenInfo"><strong>{cartItem.name}</strong>: R$5.99 (
                  {cartItem.quantity})</div>
                  <div className="total" ><br></br><strong>Valor: </strong>R${(cartItem.quantity*5.99).toFixed(2)}</div>
                </ul >
                <div className="buttons">
                  <div>
                    <button id="add"
                      onClick={context.addProductToCart.bind(
                        this,
                        cartItem
                      )}
                    >
                      <MdAddCircleOutline style={{fontSize:'1.8rem', color:'#f1f1f1',}}></MdAddCircleOutline>
                    </button>
                  </div>
                  <div>
                    <button id="rem"
                      onClick={context.removeProductFromCart.bind(
                        this,
                        cartItem.id
                      )}
                    >
                      <MdRemoveCircleOutline style={{fontSize:'1.8rem',color:'#f1f1f1'}}></MdRemoveCircleOutline>
                    </button>
                  </div>
                </div>
        
              </li>
            ))}
            {numItens()}
          </ul>
          
        </main>
      </div>
    </React.Fragment>
  );
};



export default CartPage;
