import React, { Component } from 'react';
import './Menu.scss';

class Menu extends Component {

  state = {
    lang: 'fr',
    menuPages: [
      {
        menuSections: [
          {
            title: { en: 'Classic Flavors', fr: 'Saveurs Classiques' },
            menuItems: [
              { name: { en: 'Pineapple Express', fr: 'Ananas Express' }, price: 13 },
              { name: { en: 'Purple Haze', fr: 'Brume Pourpre' }, price: 15 },
              { name: { en: 'Strawberry Fields', fr: 'Champs de Fraises' }, price: 11 },
            ],
          },

          {
            title: { en: 'Hometown Favorites', fr: 'Favoris Ville Natale' },
            menuItems: [
              { name: { en: 'OG Clouds', fr: 'Nuages OG' }, price: 19 },
              { name: { en: 'Crazy Horse', fr: 'Cheval Fou' }, price: 17 },
              { name: { en: 'Darth Vader', fr: 'Dark Vador' }, price: 21 },
            ],
          },
        ],
      },
      
      {
        menuSections: [
          {
            title: { en: 'Seasonal', fr: 'Saisonnière' },
            menuItems: [
              { name: { en: 'Blueberry Blast', fr: 'Explosion de Myrtille' }, price: 22 },
              { name: { en: 'Rhubarb Pie', fr: 'Tarte à la Rhubarbe' }, price: 22 },
              { name: { en: 'Flying Cherry', fr: 'Cerise Volante' }, price: 19 },
            ],
          },

          {
            title: { en: 'Deluxe', fr: 'De Luxe' },
            menuItems: [
              { name: { en: 'Skywalker', fr: 'Ciel Marcheur' }, price: 33 },
              { name: { en: 'Canadian Breakfast', fr: 'Petit Déjeuner Canadien' }, price: 42 },
              { name: { en: 'Snoop in da House', fr: 'Snoop dans la Maison' }, price: 21 },
            ],
          },
        ],
      },
    ],
  }
  
  render(){
    const { menuPages, lang } = this.state;
    
    return (
      <div className='Menu'>
        {menuPages.map((page, index)=> (
          <div className='menu-page' key={index}>
            {page.menuSections.map((section)=> (
              <div key={section.title[lang]} className='menu-section'>
                <h2>{section.title[lang]}</h2>
                {section.menuItems.map((item)=> (
                  <div key={item.name[lang]} className='menu-item'>
                    <span>{item.name[lang]}</span>
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
