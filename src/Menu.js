import React, { Component } from 'react';
import './Menu.scss';

class Menu extends Component {
  render(){
    return (
      <div className='Menu'>
        <div className='menu-page'>
          <div className='menu-item'>
            <span>Pineapple Express</span>
            <span>$13</span>
          </div>
        </div>
      </div>
    );
  }
};

export default Menu;
