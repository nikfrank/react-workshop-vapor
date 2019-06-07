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
    <Navbar />

    <Switch>
      <Route exact path='/home' component={Home} />
      <Route exact path='/menu' component={Menu} />

      <Route exact path='/order' component={Order} />
      <Redirect from='/' to='/home' />
    </Switch>

    <footer />
  </Router>
);
```

we can test already that the url `localhost:3000/home` will render our `Home` Component, likewise for the other two.

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

<sub>./src/App.js</sub>
where we had

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
import Order for './Order';

//...
```

we can also take the time now to make SCSS files for each of them


`$ touch src/Navbar.scss src/Home.scss src/Menu.scss src/Order.scss`


<sub>./src/Navbar.js</sub>
```js
//...

import './Navbar.scss';

//...
```


### make a navbar, style it as colored glass, slide it smaller on scroll
#### Links

Now is time to fill in the  `<Navbar/>` and `<footer/>`.







This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
