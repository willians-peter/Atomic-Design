import React, { useEffect } from 'react';
import "./App.css";
import Button from "./components/atoms/Button";
import PlantIcon from "./components/atoms/PlantIcon";
import PriceTag from "./components/atoms/PriceTag";
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';

function App() {
 useEffect(() => {
  console.log("useEffect executado");
  const link = document.querySelector("link[rel*='icon']");
  if (link) {
    console.log("Link encontrado");
    link.href = "/local-florist-icon.svg";
  } else {
    console.log("Link não encontrado");
  }
}, []);

  return (
    <div>
      <p>PAGINA TRELLO</p>
      <Button text="Botão Primário" variant="primary" />
      <Button text="Botão Secundário" variant="secondary" />
      <h1> Icone <PlantIcon size="lg" /> </h1>
      <p> Valor do PriceTag: <PriceTag value={22.9} /> </p>
    </div>
  );
}

export default App;
