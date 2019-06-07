import React from "react";

import { NavLink } from 'react-router-dom';

export default ()=>(
  <header>
    <div className="header-mobile-container">
      <h2 className="homelogo-text"><NavLink to="/home">Mulligans</NavLink></h2>
    </div>

    <div className="nav-regular">
      <nav>
        <li><NavLink to="/home">Home</NavLink></li>
        <li><NavLink to="/menu">Menu</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </nav>
    </div>
  </header>
);
