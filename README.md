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





This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
