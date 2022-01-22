import React,{useEffect, useState} from 'react';

function GetProducts() {
    const[products,setProducts] = useState([]);
    
    useEffect(() => {
        fetch(
            "https://www.fruityvice.com/api/fruit/all")
    .then((res) => res.json())
    .then((json) => {
        setProducts(json)
    })
        
    })
  return products;
}

export default GetProducts;
