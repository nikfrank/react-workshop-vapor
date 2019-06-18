import React, { Component } from 'react';
import './Menu.scss';

class Menu extends Component {

  state = {
    menuItems: [
      { name: 'Pineapple Express', price: 13 },
      { name: 'Purple Haze', price: 15 },
      { name: 'Strawberry Fields', price: 11 },
    ],
  }
  
  render(){
    const { menuItems } = this.state;
    
    return (
      <div className='Menu'>
        <div className='menu-page'>
          {menuItems.map((item)=> (
            <div key={item.name} className='menu-item'>
              <span>{item.name}</span>
              <span/>
              <span>${item.price}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Menu;
