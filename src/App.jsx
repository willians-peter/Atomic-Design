import React, { useEffect } from "react";
import "./App.css";
import Button from "./components/atoms/Button";
import PlantIcon from "./components/atoms/PlantIcon";
import PriceTag from "./components/atoms/PriceTag";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";

function App() {
  return (
    <div>
      <p>PAGINA TRELLO</p>
      <Button text="Botão Primário" variant="primary" />
      <Button text="Botão Secundário" variant="secondary" />
      <h1>
        {" "}
        Icone <PlantIcon size="lg" />{" "}
      </h1>
      <p>
        {" "}
        Valor do PriceTag: <PriceTag value={22.9} />{" "}
      </p>
    </div>
  );
}

export default App;
