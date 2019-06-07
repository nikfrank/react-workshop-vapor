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
import Order for './Order';

export default ()=> (
  <Router>
    <Navbar />

    <Switch>
      <Route exact path='/home' component={Home} />
      <Route exact path='/menu' component={Menu} />

      <Route exact path='/order' component={Order} />
      <Redirect from='/' to='/home' />
    </Switch>

    <footer>
    </footer>
  </Router>
);
