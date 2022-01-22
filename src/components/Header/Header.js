import React from 'react';

function Header() {
    return (
        <>
            <div style ={img}>
                <img  height='100%' src='images/logo.png'></img>
            </div>
        </>
    )
}
const img = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#d5ffbb',
    height:'60vh',
    width:'100%'
}
export default Header;
