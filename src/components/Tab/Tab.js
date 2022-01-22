import React,{ useContext, useEffect } from 'react';
import {useLocation} from 'react-router-dom'; 
import MainNavigation from '../Menu/MainNavigation';
import ShopContext from "../context/shop-context";

function Tab() {
  const context = useContext(ShopContext);

  useEffect(() => {
    console.log(context);
  }, []);

  const {state} = useLocation();
  const nutri = state.product
  console.log(nutri)

  return (
    <>
      <MainNavigation
        cartItemNumber={context.cart.reduce((count, curItem) => {
          return count + curItem.quantity;
        }, 0)}
      />
      <div style={main}>
        <div style={container}>
          <div style={info}>
            <img style={{border:'5px solid black', borderRadius:'50px'}} width='250vh' height='150vh' src={require('../../../public/images/fruits/' +nutri.name +'.jpeg')}/>
            <div className='name'><h1>{nutri.name}</h1></div>
            <diV style={nutritions}>
              <h2>Calories: {nutri.nutritions.calories}</h2>
              <h2>Carbohydrates: {nutri.nutritions.carbohydrates}</h2>
              <h2>Fat: {nutri.nutritions.fat}</h2>
              <h2>Protein: {nutri.nutritions.protein}</h2>
              <h2>Sugar: {nutri.nutritions.sugar}</h2>
            </diV>
          </div>
        </div>
      </div>
    </>
  );
}
const main ={
  width:'100%',
  backgroundColor: '#f1f1f1',
  margin:'0px 0px 0px 0px',
  paddingTop:'5rem',
  paddingBottom:'5rem',
  display: 'flex',
	justifyContent: 'center',
  
}
const container = {
  width: '60vh',
  height:'auto',
  border:'5px solid black',
  backgroundColor:'#b1f089',
  margin:  '1rem 0',
  borderRadius: '20px',
}
const info ={
  marginTop:'3rem',
  marginBottom:'3rem',
  textAlign: 'center',
  alignItems: 'center'
}
const nutritions={
  float:'left',
  marginLeft:'2.5rem',
  textAlign:'left',
  marginBottom:'1rem'
}
export default Tab;
