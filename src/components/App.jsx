import React, { Fragment, useState } from "react";
import Burger from "./Burger";

function App() {
  const [burgers, setBurgers] = useState([
    { id: 5, image: Salteña, nombre: "SALTEÑA", precio: 250 },
    { id: 2, image: Porteña, nombre: "PORTEÑA", precio: 180 },
    { id: 3, image: Chicken, nombre: "CHICKEN", precio: 150 },
    { id: 4, image: Criolla, nombre: "CRIOLLA", precio: 200 },
    { id: 1, image: Patagonia, nombre: "PATAGONIA", precio: 240 },
  ]);

  const [cart, setCart] = useState([]);

  return (
    <Fragment>
      <h1>Hola</h1>
    </Fragment>

);
}

export default App;
