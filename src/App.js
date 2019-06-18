import React from 'react';

import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom';

import './App.scss';

import Navbar from './Navbar';
import Home from './Home';
import Menu from './Menu';
import Order from './Order';


import fbLogo from './imgs/facebook.svg';
import instaLogo from './imgs/insta.svg';

export default ()=> (
  <Router>
    <>
      <Navbar />

      <Switch>
        <Route exact path='/home' component={Home} />
        <Route exact path='/menu' component={Menu} />

        <Route exact path='/order' component={Order} />
        <Redirect from='/' to='/home' />
      </Switch>

      <footer>
        <p>&copy; 2019 CAPSLOK HI TECH </p>
        <img alt='' src={fbLogo}/>
        <img alt='' src={instaLogo}/>
        <ul>
          <li><a href='emailto:nikbfrank+spam@gmail.com'>Email Us</a></li>
          <li><a href='/home'>Home Page</a></li>
          <li><a href='/menu'>Menu Page</a></li>
          <li><a href='/order'>Order Page</a></li>
        </ul>
      </footer>
    </>
  </Router>
);
