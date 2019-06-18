<a name="thatop"></a>
# Single Page Application: Vapor Lounge Website

here, we will learn to complete tasks with ReactJS & SCSS to add responsive interactive features to our website, while making a ballin vapor lounge theme with bold Miami looking stuff.

we'll cover the architecture of Single Page Applications, and gain more experience with common component patterns in structured applications.


Agenda:

- [step 1: routing](#step1)
  - install react-router, make three page view components
  - make a navbar, style it as colored glass, slide it smaller on scroll
  - make a layout + footer, links, social media, make an SVG logo
- [step 2: page content](#step2)
  - big parallax animated pixelwave images
  - neon bars snake back and forth around three edges of every screen
  - page scroll neon icons, onscroll / onenter animations (with easing)
  - neon text and images that have something to do with the lounge
- [step 3: menu with language selection](#step3)
  - black text on neon glow rect bg
  - refactor menu into JSON
  - translate the menu into two more languages
  - use flex-box to ltr / rtl
  - drop hover menu to select language
- [step 4: placing an order / shopping cart pattern](#step4)
  - menu click -> add item to order
  - import order store for cross view data
  - save the order in localstorage
  - order page user can select quantities for each item, see the bill
  - pretend to take order, clear localstorage and view


Links

- https://codepen.io/FelixRilling/pen/qzfoc
- http://geekyfreaky.com/wp-content/uploads/2018/01/vrXXOJ.gif
- https://archive-media-0.nyafuu.org/wg/image/1506/42/1506423646403.gif
- https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cf2836cb-5893-4a6c-b156-5a89d94fc721/dce61tw-3cfde162-fb53-4b5a-96cd-ae1df756df65.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NmMjgzNmNiLTU4OTMtNGE2Yy1iMTU2LTVhODlkOTRmYzcyMVwvZGNlNjF0dy0zY2ZkZTE2Mi1mYjUzLTRiNWEtOTZjZC1hZTFkZjc1NmRmNjUuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.vEwtplf1FBeP01zGIPa3zIMEz7mUudddreie2iCbe9Q


## getting started


`$ create-react-app vapor-lounge`

`$ cd vapor-lounge`

`$ npm start`

you now have the default create-react-app starter running in your browser and can edit the `src` files live

you are now also ready to work through the [exercises](/exercises.md)!

you should be fairly comfortable with writing Components to use as Views or as Widgets, and using `props` thereon.


### node-sass

in this workshop, I'm writing SCSS files instead of CSS

to follow along in SCSS

`$ yarn add node-sass`

then just change any .css file you want to .scss and react-app will do the right thing




<a href="#step1"></a>
## step 1: routing

Our page will have three Views:

1. Home / About page with animations, images and a map
2. Menu with language selection
3. Place an Order (shopping cart)


in order to have three Views on one page (without reloading the page like in 1996) we'll use the "client side routing" pattern

this allows us to use the url to decide which View Component to render.


`$ yarn add react-router react-router-dom`


### install react-router, make three page view components


react router works by `<Router>` taking over as the top level Component in our app

then, anywhere inside the `<Router>`'s children, we can have `<Route>` elements which render a Component when they match the url path.

Let's see what that looks like:

<sub>./src/App.js</sub>
```js
import React from 'react';

import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom';

import './App.scss';

const Navbar = ()=> (<div/>);

const Home = ()=> (<div>Home</div>);
const Menu = ()=> (<div>Menu</div>);
const Order = ()=> (<div>Order</div>);

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

      <footer />
    </>
  </Router>
);
```

we can test already that the url `localhost:3000/home` will render our `Home` Component, likewise for the other two.


the `<> ... </>` empty tags are used as a workaround for `<Router>...</Router>` who needs to have ONLY ONE child element.

empty tags are a single JSX which doesn't render any DOM elements, which makes it useful for this purpose (just containing stuff).

---

Before we go any further, we should make seperate files for each of the four Components we just made

`$ touch src/Navbar.js src/Home.js src/Menu.js src/Order.js`

and move each JSX to its file so we can export it back to `App.js`

<sub>./src/Navbar.js</sub>
```js
import React from 'react';

const Navbar = ()=> (<div/>);

export default Navbar;
```

(likewise for the other three)

where we had

<sub>./src/App.js</sub>
```js
//...

const Navbar = ()=> (<div/>);

const Home = ()=> (<div>Home</div>);
const Menu = ()=> (<div>Menu</div>);
const Order = ()=> (<div>Order</div>);

//...
```

we can now write

```js
//...

import Navbar from './Navbar';
import Home from './Home';
import Menu from './Menu';
import Order from './Order';

//...
```

we can also take the time now to make SCSS files for each of them


`$ touch src/Navbar.scss src/Home.scss src/Menu.scss src/Order.scss`


and in each of the Component files, we can import the .scss files

<sub>./src/Navbar.js</sub>
```js
//...

import './Navbar.scss';

//...
```

and for while we style the navbar and footer, let's set the pages to be full-screen sized


<sub>./src/Home.js</sub>
```js
//...

import './Home.scss';

const Home = ()=> (<div className='Home'>Home</div>);
```

<sub>./src/Home.scs</sub>
```scss
.Home {
  height: 100vh;
}
```


### make a navbar, style it as colored glass, slide it smaller on scroll

Now is time to fill in the  `<Navbar/>` and `<footer/>`.


#### Links

First thing's first: let's put some nav links into our `Navbar`

we'll use [react-router-dom's Link Component](https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/api/Link.md)

<sub>./src/Navbar.js</sub>
```js
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
```

and make them sit side-by-side over on the right side of the bar

<sub>./src/Navbar.scss</sub>
```scss
.Navbar {
  position: fixed;
  top: 0;
  z-index: 10;
  
  width: 100%;
  min-height: 80px;
  
  background-image: linear-gradient(
    to bottom,
    rgba(156, 21, 219, 0.75),
    rgba(56, 31, 72, 0.25)
  );

  display: flex;
  flex-direction: row;

  h1 {
    color: #fffa;
    padding: 10px 0 10px 20px;
    flex-grow: 5;
  }

  ul.nav-links {
    list-style: none;
    padding: 13px 0 0 0;
    
    flex-grow: 3;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    a {
      color: white;
      font-size: 1.25rem;
      text-decoration: none;

      &:hover {
        color: #fffa;
      }

    }

    li {
      flex-grow: 1;
      text-align: center;
      padding-top: 10px;
    }
  }
}
```



#### footer

<sub>./src/App.scss</sub>
```scss

footer {
  height: 180px;
  background-color: black;
  background-image: linear-gradient(
    to top,
    rgba(156, 21, 219, 0.75),
    rgba(56, 31, 72, 0.25)
  );
}
```



## Page Content

Let's put some images and marketing content in our page so people will want to come to our lounge


### big parallax animated pixelwave images

We should have three screen-heights worth of content - with big background images, which we'll float styled text blocks on top of.


<sub>./src/Home.js</sub>
```js
import React from 'react';
import './Home.scss';

const firstBg = 'http://geekyfreaky.com/wp-content/uploads/2018/01/vrXXOJ.gif';
const secondBg = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cf2836cb-5893-4a6c-b156-5a89d94fc721/dce61tw-3cfde162-fb53-4b5a-96cd-ae1df756df65.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NmMjgzNmNiLTU4OTMtNGE2Yy1iMTU2LTVhODlkOTRmYzcyMVwvZGNlNjF0dy0zY2ZkZTE2Mi1mYjUzLTRiNWEtOTZjZC1hZTFkZjc1NmRmNjUuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.vEwtplf1FBeP01zGIPa3zIMEz7mUudddreie2iCbe9Q';
const thirdBg = 'https://archive-media-0.nyafuu.org/wg/image/1506/42/1506423646403.gif';

const Home = ()=> (
  <div className='Home'>
    <div className='screen'
         style={{ backgroundImage: `url("${firstBg}")`}}>
    </div>
    <div className='screen'
         style={{ backgroundImage: `url("${secondBg}")`}}>
    </div>
    <div className='screen'
         style={{ backgroundImage: `url("${thirdBg}")`}}>
    </div>
  </div>
);

export default Home;
```

<sub>./src/Hom.scss</sub>
```scss
.Home {
  padding-top: 80px;

  background-color: black;
  color: white;

  .screen {
    height: 100vh;
    background-color: black;
    background-repeat: no-repeat;
  }
}
```

#### neon headers

our vapor lounge has a neon-noir theme, which we should keep going with our header texts


first, let's make some header texts!

<sub>./src/Home.js</sub>
```js
//...
import { Link } from 'react-router-dom';

const Home = ()=> (
  <div className='Home'>
    <div className='screen'
         style={{ backgroundImage: `url("${firstBg}")`}}>
      <div className='landing-blurb'>
        <h1 className='neon'>This is a lounge where you can vape...</h1>
        <div className='p-container'>
          <p>we have all the best vapes and stuff</p>
          <p>we have all the best flavours</p>
          <p>for cool people who hate smoking</p>
          <p><Link to='/menu'>Check out our Menu</Link></p>
        </div>
      </div>
    </div>
  //...
  
```

so now we can style them

<sub>./src/Home.scss</sub>
```scss
.Home {
  padding-top: 80px;

  background-color: black;
  color: white;

  .screen {
    height: 100vh;
    width: 100%;
    background-color: black;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;

    .neon {
      font-weight: 800;
      font-size: 2rem;
      animation: neon 1.5s ease-in-out infinite alternate;
    }

    //... this is where to put the .landing-blurb rule next

  }
}

@keyframes neon {
  from {
    text-shadow: 0 0 10px #0ff,
                 0 0 20px #0ff,
                 0 0 30px #0ff,
                 0 0 40px #228DFF,
                 0 0 70px #228DFF,
                 0 0 80px #228DFF,
                 0 0 100px #228DFF,
                 0 0 150px #228DFF;
  }
  to {
    text-shadow: 0 0 5px #5dd,
                 0 0 10px #5dd,
                 0 0 15px #5dd,
                 0 0 20px #228DFF,
                 0 0 35px #228DFF,
                 0 0 40px #228DFF,
                 0 0 50px #228DFF,
                 0 0 75px #228DFF;
  }
}
```



#### floating text blocks

now that we have our backgrounds, our text blocks could use a translucent background to make reading them easier


let's put our `.landing-blurb` into the middle of the `.screen`, nesting the rule to avoid any collisions, incase we name something `.landing-blurb` on another page

<sub>./src/Home.scss</sub>
```scss
//...

    .landing-blurb {
      position: absolute;
      top: 15%;
      left: 20%;
      width: 60%;
      text-align: center;
    }
    
    //... this is where to put the p-container rule next
```

so now we can put a translucency on the `.p-container`

```scss

      .p-container {
        padding: 5px;
        border-radius: 5px;
        background-color: #fff3;

        font-size: 1.25rem;
        font-weight: bold;

        //...
```

and of course, we want our `<Link/>` to glow when we `:hover` it

```scss
        a {
          color: #dff;

          &:hover {
            color: #7ff;
            animation: neon 1.5s ease-in-out infinite alternate;
          }
        }
      }
    }
```

to finish off the landing page, let's add some vapes to the bottom row

<sub>./src/Home.js</sub>
```html
//...
const firstVapes = 'https://vaping.com/media/catalog/product/cache/1/small_image/236x297/7adae98f10b65a46c99555dc2b8a9bb0/f/r/freemax-twister-kit.png';
const secondVapes = 'https://cdn11.bigcommerce.com/s-u5dfog9d/images/stencil/500x659/products/109/314/ego_battery__22630.1417747544.png?c=2';

//...

    <div className='screen'
         style={{ backgroundImage: `url("${firstBg}")`}}>
      <div className='landing-blurb'>
        <h1 className='neon'>This is a lounge where you can vape...</h1>
        <div className='p-container'>
          <p>we have all the best vapes and stuff</p>
          <p>we have all the best flavours</p>
          <p>for cool people who hate smoking</p>
          <p><Link to='/menu'>Check out our Menu</Link></p>
        </div>
      </div>
      <div className='vape-img-container'>
        <img alt='' src={firstVapes}/>
        <img alt='' src={secondVapes}/>
        <img alt='' src={firstVapes}/>
      </div>
    </div>

```

and style the `.vape-img-container` with `flex-direction: row; justify-content: space-around;`

nested inside our `.screen` rule

<sub>./src/Home.scss</sub>
```scss
    .vape-img-container {
      position: absolute;
      bottom: 15%;
      right: 10%;
      left: 10%;

      display: flex;
      flex-direction: row;
      justify-content: space-around;

      img {
        max-height: 20vh;
      }
    }
```


#### celebrity endorsements

let's pretend our vape lounge is endorsed by Dave Chappelle

he's a known vape enthusiast and if he sues us, that's probably good press anyhow

<sub>./src/Home.js</sub>
```html
    <div className='screen'
         style={{ backgroundImage: `url("${secondBg}")`}}>
      <img src='https://i.imgur.com/vbbTxB0.png' className='dave-chappelle'/>
      <div className='dave-blurb'>
        <h1 className='neon'>Vape with all the celebs...</h1>
        <div className='p-container'>
          <p>I can't figure out why these crackers are still smoking cigarettes at dive bars</p>
          <p>... do they want to look stupid? ... that's why I vape here</p>
          <p>- Dave Chappelle</p>
        </div>
      </div>
    </div>

```

<sub>./src/Home.scss</sub>
```scss
  //... nested inside .screen

    .dave-chappelle {
      position: absolute;
      right: 40%;
      bottom: 0;
    }

    .dave-blurb {
      position: absolute;
      right: 10%;
      top: 30%;
      max-width: 400px;
      text-shadow: 0 0 5px #5dd;
    }

//...
```


#### call to action to the order page

we really want our users to navigate over to the order page - that's where we can take their money!

let's sell them the idea with some web 3.0 compliant looking sales material, and finish off with another glowing `<Link/>`


unnest the `a` rule


```scss
    .gear-container img {
      position: absolute;

      &:nth-child(1) {
        left: 4%;
        top: 0;
      }
      
      &:nth-child(2) {
        left: 30vw;
        top: 0;
      }
      
      &:nth-child(3) {
        left: 4%;
        top: 30%;
      }
      
      &:nth-child(4) {
        left: 4%;
        bottom: 0;
      }
    }

    .order-action {
      position: absolute;
      right: 5%;
      top: 30%;

      h2 {
        font-size: 1.5rem;
      }
      
      padding: 9px;
      border-radius: 5px;
      background-color: #fffe;
      color: black;

      font-size: 1.25rem;
      font-weight: bold;      
    }

```


```html

    <div className='screen'
         style={{ backgroundImage: `url("${thirdBg}")`}}>
      <div className='gear-container'>
        <img alt='' src={firstGear}/>
        <img alt='' src={secondGear}/>
        <img alt='' src={thirdGear}/>
        <img alt='' src={fourthGear}/>
      </div>
      
      <div className='order-action'>
        <h2>All the best gear</h2>
        <p>Available online one click away</p>
        <Link to='/order'>Order Now</Link>
      </div>
    </div>
```

#### footer

`$ mkdir src/imgs`

--> we can download facebook.svg, insta.svg from the open web somewhere

```scss
footer {
  height: 180px;
  background-color: black;
  background-image: linear-gradient(
    to top,
    rgba(156, 21, 219, 0.75),
    rgba(56, 31, 72, 0.25)
  );

  display: flex;
  flex-direction: row;

  text-align: center;
  align-items: center;
  justify-content: space-around;
  
  p {
    color: white;
    font-size: 1.25rem;
  }


  ul {
    list-style: none;
    padding: none;
  }

  a {
    color: white;
  }

  img {
    height: 60px;
    width: 60px;
  }
}

```


```js
//...

import fbLogo from './imgs/facebook.svg';
import instaLogo from './imgs/insta.svg';


//...

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

```

---


### Menu, with language selection

Our customers come from all over the world, and speak at least three different languages, some go rtl (right-to-left) and some ltr (left-to-right)

So when we make our menu, we need to make a `<select/>` for language, and load our menu item strings from a JSON based on the `language` set to the `state`


first, let's render up the menu, so then we can refactor the values from the JSX into the JSON


#### rendering a menu

Let's start by rendering one page of the menu with one item on it

<sub>./src/Menu.js</sub>
```html
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
```


and styling everything to fit on the page

<sub>./src/Menu.scss</sub>
```scss
.Menu {
  padding-top: 80px;
  
  height: calc( 100vh - 260px );
  width: 100%;
  background-color: black;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  color: white;

  //...
}

```

styling the page to have a glowing border

```scss
  .menu-page {
    height: 56vh;
    width: 300px;
    margin: 10vh auto;

    box-shadow:
      0 0 20px 10px #fff,  /* inner white */
      0 0 33px 20px #f0f, /* middle magenta */
      0 0 46px 30px #0ff; /* outer cyan */

    border-radius: 8px;

    //...
  }

```

and the menu items to appear spaced out on their row

```scss
    .menu-item {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;

      margin-top: 5px;
    }
```



This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
