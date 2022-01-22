import React from "react";
import ShopContext from "../context/shop-context";
import MainNavigation from "../Menu/MainNavigation";
import { useNavigate} from 'react-router-dom';
import "./Products.css";


const ProductsPage = props => {
  const navigate = useNavigate();

  function onClickTable(product){
    navigate('/nutricional-table',{state:{product:product}})
  }
  return (
    <ShopContext.Consumer>
      {context => (
        <React.Fragment>
          <MainNavigation
            cartItemNumber={context.cart.reduce((count, curItem) => {
              return count + curItem.quantity;
            }, 0)}
          />
          <div className="products">
            <div className='conjunto'>
              {context.products.map(product => (
                <div key={product.id} className="product">
                  <div> 
                    <img style={{border:'5px solid black', borderRadius:'50px'}} width='250vh' height='150vh' src={require('../../../public/images/fruits/' +product.name +'.jpeg')}/>
                    <h2><strong>{product.name}</strong> - 5.99</h2>
                    <div className="buttons">
                      <button 
                        onClick={context.addProductToCart.bind(this, product)}
                      >
                        <strong>Add to<br></br>Cart</strong>
                      </button>
                      <button 
                        onClick={()=>{onClickTable(product)}}
                      >
                        <strong>Nutritional<br></br>Table</strong>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </React.Fragment>
      )}
    </ShopContext.Consumer>
  );
};



export default ProductsPage;
