import React from "react";
import { NavLink } from "react-router-dom";

import "./MainNavigation.css";

const MainNavigation = props => (
  <header className="main-navigation">
    <nav>
      <ul>
        <li>
          <NavLink to="/"><h2 style={{margin:'0px 0px 0px 0px'}}>Products</h2></NavLink>
        </li>
        <li>
          <NavLink to="/cart" >
            <div>
              <h2 style={{margin:'0px 0px 0px 0px',wordSpacing: '0.5rem' }}>
                Cart
                ({props.cartItemNumber})
              </h2> 
            </div>
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default MainNavigation;
