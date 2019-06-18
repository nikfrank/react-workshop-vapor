import React, { Component } from 'react';
import './Menu.scss';

class Menu extends Component {

  state = {
    menuPages: [
      {
        menuSections: [
          {
            title: 'Classic Flavors',
            menuItems: [
              { name: 'Pineapple Express', price: 13 },
              { name: 'Purple Haze', price: 15 },
              { name: 'Strawberry Fields', price: 11 },
            ],
          },

          {
            title: 'Hometown Favorites',
            menuItems: [
              { name: 'OG Clouds', price: 19 },
              { name: 'Crazy Horse', price: 17 },
              { name: 'Darth Vader', price: 21 },
            ],
          },
        ],
      },
      
      {
        menuSections: [
          {
            title: 'Seasonal',
            menuItems: [
              { name: 'Blueberry Blast', price: 22 },
              { name: 'Rhubarb Pie', price: 22 },
              { name: 'Flying Cherry', price: 19 },
            ],
          },

          {
            title: 'Deluxe',
            menuItems: [
              { name: 'Skywalker', price: 33 },
              { name: 'Canadian Breakfast', price: 42 },
              { name: 'Snoop in da House', price: 21 },
            ],
          },
        ],
      },
    ],
  }
  
  render(){
    const { menuPages } = this.state;
    
    return (
      <div className='Menu'>
        {menuPages.map((page, index)=> (
          <div className='menu-page' key={index}>
            {page.menuSections.map((section)=> (
              <div key={section.title} className='menu-section'>
                <h2>{section.title}</h2>
                {section.menuItems.map((item)=> (
                  <div key={item.name} className='menu-item'>
                    <span>{item.name}</span>
                    <span/>
                    <span>${item.price}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Menu;
