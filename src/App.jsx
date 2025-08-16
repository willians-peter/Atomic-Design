import React, { useEffect } from "react";
import "./App.css";
import Button from "./components/atoms/Button";
import PlantIcon from "./components/atoms/PlantIcon";
import PriceTag from "./components/atoms/PriceTag";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import Header from "./components/organisms/Header/Header";
import Footer from "./components/organisms/Footer/Footer";
import PlantStoreIcon from "./components/assets/LocalFloristIcon.png";

import PlantaPage from "./pages/PlantaPage";

import "./App.css";
import PlantaGrid from "./components/organisms/PlantaGrid";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <div>
          <p>Catálogo de plantas:</p>
          <PlantaPage />
        </div>
        <div className="logo-final">
          <h1>Plant Store</h1>
          <img
            src={PlantStoreIcon}
            alt="Planta Store Icone"
            style={{
              borderRadius: "8px",
              width: "32px",
              height: "32px",
              objectFit: "contain",
              maxWidth: "32px",
              maxHeight: "32px",
            }}
          />
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default App;
