import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.scss';

const Navbar = ()=> (
  <div className='Navbar'>
    <h1>Vapor Lounge</h1>
    <ul className='nav-links'>
      <li>
        <Link to='/home'>Home</Link>
      </li>
      <li>
        <Link to='/menu'>Menu</Link>
      </li>
      <li>
        <Link to='/order'>Order</Link>
      </li>
    </ul>
  </div>
);

export default Navbar;
