import React from "react";
import LazyHero from "react-lazy-hero";

import WoodenBottom from "./imgs/woodBottom.jpg";
import brass from "./imgs/brassFix.jpg";
import cowboy from "./imgs/cowboySteak.jpg";
import flame from "./imgs/flameSteak.jpg";
import bbq from "./imgs/bbqBrisket.jpg";
import porterhouse from "./imgs/porterhouse.jpg";
import brisket from "./imgs/brisket.jpg";
import Roaster from "./imgs/skirtSteak.jpg";

import About from './About';

import './Home.scss';

export default ()=> [
  <div key='home' className='Home-Page'>
    <LazyHero
      className="pageTopper"
      imageSrc={Roaster}
      opacity={0.0}
      parallaxOffset={100}
      minHeight="25vw"
      transitionDuration={500}
    />

    <div className='Home-Gallery'>
      <div className="WoodenBottom-container">
        <img alt='' src={WoodenBottom} />
        <img alt='' src={brass} className="home-brass" />
      </div>

      <div className="spacer" />
      <h1>Mulligans Steakhouse</h1>

      <ul className="grid">
        <li
          className="small"
          style={{ backgroundImage: `url(${porterhouse})` }}
        />
        <li className="small" style={{ backgroundImage: `url(${bbq})` }} />
        <li
          className="small"
          style={{ backgroundImage: `url(${cowboy})` }}
        />
      </ul>

      <div className="Gallery-Blurb">
        <p>
          <br />
          At Mulligans we like steak. And we like whiskey. We also like
          whiskey on our steak, and with our steak. All of our steaks are
          served medium rare unless you ask otherwise -in which case we will
          ask you to leave. We prepare them with the respect steak deserves
          to be treated: fresh ground peppercorns and sea salt. Cast iron
          skillet, duck fat and flame. Or choose one of our caveman steaks.
          <br />
          Fire. <br />
          Steak. <br />
          <br /> Say steak again, we dare you.
          <br />
        </p>
      </div>
    </div>
    <section className="contact">
      <h3 className="title">Mulligans</h3>
      <p>Come sit for a while.</p>
      <br />

      <ul className="grid">
        <li
          className="large"
          style={{ backgroundImage: `url(${flame})` }}
        />
        <li
          className="large"
          style={{ backgroundImage: `url(${brisket})` }}
        />
      </ul>
    </section>
  </div>,
  <About key='about'/>
];
