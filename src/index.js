import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <div className="sub-container">
        <Heading />
        <Main />
      </div>
      <Footer />
    </div>
  );
}

function Heading() {
  return (
    <div className="heading-container">
      <h1 className="heading-title">&mdash;Fast React Pizza Co.&mdash;</h1>
    </div>
  );
}

function Main() {
  return (
    <div className="main-container">
      <h2 className="main-title">Our Menu</h2>
      <p className="main-description">
        Authentic Italian cuisine. 6 creative dishes to choose from. All from
        our stone oven, all organic, all delicious.
      </p>
      <ul className="main-pizza-list">
        {pizzaData.map((pizza) => (
          <Pizza pizzaObj={pizza} />
        ))}
      </ul>
    </div>
  );
}

function Pizza(props) {
  return (
    <li className="pizza-item">
      <img
        className="pizza-photo"
        src={props.pizzaObj.photoName}
        alt="Focaccia"
      />
      <div className="pizza-info">
        <h3 className="pizza-name">{props.pizzaObj.name}</h3>
        <p className="pizza-description">{props.pizzaObj.ingredients}</p>
        <p className="pizza-price">{props.pizzaObj.price}</p>
      </div>
    </li>
  );
}

function Footer() {
  return (
    <div className="footer-container">
      <p className="footer-description">
        We're open until 22:00. Come visit us or order online
      </p>
      <a className="footer-button" href="#">
        Order now
      </a>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
