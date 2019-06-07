## react steak workshop

here, we will learn to complete tasks with ReactJS & SCSS to add responsive interactive features to our website!


## getting started

let's open up a shell (git bash for windows, or mac users use terminal) in our code projects directory and run

`$ git clone https://github.com/nikfrank/react-steak-workshop`

`$ cd react-steak-workshop`

then we can get started by running `npm start` and opening [localhost:3000](http://localhost:3000)

if you still need to install node, [here's how to google for that](https://www.google.com/search?q=installing+node)

---

later we'll need yarn which we can get with

`$ sudo npm install -g yarn` on linux / mac (it will ask to auth)

or on windows, run git bash as an administrator and run

`$ npm install -g yarn`

then close the terminal / shell / git bash window and reopen it to have `yarn` available! :D

---


## agenda

- parallax Steak & Grill on homepage
  - flying steaks landing on grills, fire, <SteakSVG cooked={true}/>
- menu with language selection
  - render items from menu.json
  - implement language selection feature, with rtl / ltr correction
  - render images of steaks from menu.json[0].imgSrc
- submitting orders
  - menu (<button onClick={()=> this.addToOrder(steak)}> + </>)
  - addToOrder = (steak)=> this.props.saveToLocalStorage(steak) // have already ?perhaps?
  - convert "contact us" page to "submit order", keeping email api call as transit
  - style "current order" responsively to match "shoppingCart" on amazon mas o menos


---


## let's code!

### parallax Steak & Grill on homepage

our homepage looks okay, but we want it to POP. Somehow our marketing director (let's call him Steve da G) found out about parallax, and he wants a steak cooking by parallax as the user scrolls the homepage

he's been nice enough to have the design team give us SVG components for each of the images we'll need to render

```
./src/Steak-svg.js
./src/Grill-svg.js
```




This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
