import React from "react";

import WoodenBottom from "./imgs/woodBottom.jpg";
import brass from "./imgs/brassFix.jpg";
import asian from "./imgs/asianCheg.jpg";
import moFire from "./imgs/moFire.jpg";
import Amanda from "./imgs/amanda.jpg";
import Stacey from "./imgs/hostess.jpg";
import Sandler from "./imgs/sandlerFix.jpg";
import Smoove from "./imgs/Smoove2.jpg";
import map from "./imgs/map.png";

import './About.scss';

export default ()=> (
  <div className='About-Page'>
    <div className="About-Gallery-Section">
      
      <div className="WoodenBottom-container">
        <img alt='' src={WoodenBottom} />
        <img alt='' src={brass} className="home-brass" />
      </div>
      
      <div className="Staff-Header">
        <h2>Our staff</h2>
      </div>
      
      <ul className="grid">
        <li
          className="small"
          style={{ backgroundImage: `url(${asian})` }}
        />
        <li
          className="small"
          style={{ backgroundImage: `url(${moFire})` }}
        />
      </ul>
      <div className="Gallery-Blurb">
        <p>
          <br />
          Our staff is here to rock out in the kitchen, and make sure you
          get the service you want. We welcome you to come to the place
          where everybody knows your name. We cater to an exclusive crowd,
          and create an environment where every guest is a VIP at their home
          away from home. Mulligans Steakhouse is your favorite restaunteurs
          favorite restaurant, a place where chefs, celebs, world leaders,
          <br />and visionaries come to have a night in. Hand carved
          furniture, barrel aged whisky, woodfire ovens, and flame broiled
          steaks. <br /> <br />
          Are you ready to join the club? <br />
        </p>
      </div>
    </div>
    <div className="About-Staff-container">
      <div className="Staff-Bios">
        <div className="Staff-Card">
          <div>
            <div style={{ backgroundImage: `url(${Amanda})` }} />
            <h3><span>Head Chef</span></h3>
          </div>
          
          <h2>Jamie Weinhaus</h2>
          
          <p>
            Jamie grew up working in her parents deli, and had mastered
            the art of the craft cocktail long before she hit the drinking
            age. She studied at Auguste Escoffier School of Culinary Arts,
            and has worked in some of the most celebrated kitchens around
            the globe. <br /> Shes on the all steak diet. <br /> <br />
            Whats your excuse?
          </p>

        </div>

        <div className="Staff-Card">
          <div>
            <div style={{ backgroundImage: `url(${Stacey})`}} />
            <h3><span>Mixologist</span></h3>
          </div>

          <h2>Stacey Smith</h2>
          <p>
            Stacey loves steak, but she loves whiskey more. She learned
            the art of distilling scotch during her travels in Japan
            before shooting down to Kentucky to try her hand at bourbon.
            Stacey worked at the renowned Clyde's Commons bar in Portland
            Oregon and serves up fresh cocktails that will leave you
            asking "Where have you been all my life?" <br />
            <br />Stacey chases her whiskey with high fives.
          </p>
        </div>
      </div>
    </div>
    
    <div className='celebs'>
      <div className="WoodenBottom-container">
        <img alt='' src={WoodenBottom} />
        <img alt='' src={brass} className="home-brass" />
      </div>
      <div className="spacer" />
      <h3> Celebrity Endorsements</h3>
      <br /> <br />
      <p>
        We know we're the best in the biz. But why take our word for it?
      </p>
      <ul className="grid">
        <li
          className="small"
          style={{ backgroundImage: `url(${Sandler})` }}
        />
        <li
          className="small"
          style={{ backgroundImage: `url(${Smoove})` }}
        />
      </ul>
    </div>

    <div className="more-info-container">
      <div className="location">
        <h2>Contact</h2>
        <br />
        <p>20 Exodus Street, Netanya </p>
        <br />
        <a href="mailto:MulligansSteakhouse@nycmail.com">
          <p>MulligansSteakhouse@nycmail.com </p>
        </a>
      </div>
      <div className="map" style={{ backgroundImage: `url(${map})` }} />
      <div className="parking">
        <h3>Parking</h3>
        <br />
        <p>
          <strong>Street Parking</strong> is available in a parking lot
          next door.
        </p>
        <br />
        <p>
          
          <strong> Valet parking </strong> is available on site for 20nis
          per car with restaurant validation.
        </p>
        <br />
        <p> We promise not to go Bueller with your Ferrari.</p>
      </div>
      <div className="policy">
        <h3>Reservation Policies</h3>
        <br />
        <p>Reservations will be held for 15 minutes.</p>
        <br />
        <p>
          After 15 minutes we will do our best to accommodate you, but
          will not be able to guarantee a table.
        </p>
        <br />
        <p>
          We accept online and phone reservations. If the reservation time
          you are looking for is not available, please feel free to join
          us at bar. We keep the bar available for walk-ins and it is
          first come first serve.
        </p>
      </div>
    </div>

  </div>
);
