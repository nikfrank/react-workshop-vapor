import React, { Component } from "react";
import LazyHero from "react-lazy-hero";

import steakFire from "./imgs/filet-mignon.jpg";
import WoodenBottom from "./imgs/woodBottom.jpg";
import brass from "./imgs/brassFix.jpg";

import porterhouse from "./imgs/porterhouse-menu.jpg";
import triTip from "./imgs/tri-tip.jpg";

import lagavulin from "./imgs/lagavulin.jpg";

import oldPaper from "./imgs/old-paper.png";

import "./Menu.scss";

const coinByLang = { en: "USD", he: "ILS" };
const coinSymbols = { USD: "$", ILS: "₪" };

class Menu extends Component {
  state = {
    pages: [
      {
        title: "Steaks",
        items: [
          {
            nameByLang: {
              he: "פורטרהאוס",
              en: "Porterhouse"
            },
            weight: {
              g: 764,
              oz: 27
            },
            priceByCoin: {
              ILS: 200,
              USD: 54
            },
            imgSrc: porterhouse
          },
          {
            nameByLang: {
              he: "טריי-טיפס",
              en: "Tri-tips"
            },
            weight: {
              g: 539,
              oz: 19
            },
            priceByCoin: {
              ILS: 150,
              USD: 54
            },
            imgSrc: triTip
          }
        ]
      },

      {
        title: "Whisky",
        items: [
          {
            nameByLang: {
              he: "לאגוולין",
              en: "Lagavulin"
            },
            volume: {
              ml: 57,
              oz: 2
            },
            priceByCoin: {
              ILS: 50,
              USD: 14
            },
            imgSrc: lagavulin
          }
        ]
      }
    ],

    selectedPageIndex: null,
    selectedItemIndex: null,
    closingFodal: false,

    currentLang: "en",
    langs: ["en", "he"]
  };

  openFodal = (selectedPageIndex, selectedItemIndex) => this.setState({ selectedPageIndex, selectedItemIndex });

  closeFodal = e => {
    e.stopPropagation();
    this.setState({ closingFodal: true });

    setTimeout(
      () =>
        this.setState({
          selectedPageIndex: null,
          selectedItemIndex: null,
          closingFodal: false
        }),
      700
    );
  };

  toggleLang = () =>
    this.setState(state => ({
      currentLang:
        state.langs[
          (state.langs.indexOf(state.currentLang) + 1) % state.langs.length
        ]
    }));
  
  render() {
    const {
      pages,
      pageIndex,
      itemIndex,
      currentLang,
      closingFodal
    } = this.state;

    const coin = coinByLang[currentLang];

    return (
      <div className="Menu-page">
        <LazyHero
          className="pageTopper"
          imageSrc={steakFire}
          opacity={0.0}
          parallaxOffset={100}
          minHeight="25vw"
          transitionDuration={500}
        />

        <div className="WoodenBottom-container">
          <img alt='' src={WoodenBottom} />
          <img alt='' src={brass} className="home-brass" />
        </div>

        <section>
          <ul className="menu-pages">
            {pages.map(({ title, items }, pi) => (
              <li
                className="menu-paper"
                key={title}
                style={{
                  backgroundImage: `url(${oldPaper})`
                }}
              >
                <div className="lang-toggle" onClick={this.toggleLang}>
                  {currentLang}
                </div>
                <h1>{title}</h1>
                {items.map(({ nameByLang, priceByCoin, imgSrc }, ii) => (
                  <div
                    className={"menu-item "+currentLang}
                    onClick={() => this.openFodal(pi, ii)}
                    key={nameByLang.en}
                  >
                    <span>{nameByLang[currentLang]}</span>
                    <span/>
                    <span>{coinSymbols[coin]}{priceByCoin[coin]}</span>
                    {(pageIndex === pi && itemIndex === ii) ? (
                      <div
                        className={"fodal " + (closingFodal ? "closing" : "")}
                        onClick={this.closeFodal}
                      >
                        <img alt='' src={imgSrc} />
                      </div>
                     ) : null}
                  </div>
                  ) )
                }
              </li>
             ) )}
            <li className='menu-paper' style={{
              backgroundImage: `url(${oldPaper})`
            }}>
              <h1>Bring your own meat</h1>
              <h3>We'll cook it here <br/><small>$25 grill courtesy</small></h3>
              <h3>Medium <small>or</small> Rare <small>only</small></h3>
            </li>
          </ul>
        </section>
      </div>
    );
  }
}
export default Menu;
