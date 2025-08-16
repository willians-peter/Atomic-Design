import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";
import Button from "./components/atoms/Button";
import PlantIcon from "./components/atoms/PlantIcon";
import PriceTag from "./components/atoms/PriceTag";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import Header from "./components/organisms/Header/Header";
import Footer from "./components/organisms/Footer/Footer";
import PlantStoreIcon from "./components/assets/LocalFloristIcon.png";
import PlantaPage from "./pages/PlantaPage";
import PlantaGrid from "./components/organisms/PlantaGrid";
import { Paper } from "@mui/material";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: darkMode ? "#0a3007" : "#c2a39a",
      },
      background: {
        default: darkMode ? "#001600" : "#e1d1c8",
        paper: darkMode ? "#0a3007" : "#f5f5dc",
      },
    },
  });

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <main>
          <Paper sx={{ padding: 2, marginBottom: 2 }}>
            <p>Catálogo de plantas:</p>
            <PlantaPage />
          </Paper>
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
          <Button
            variant={darkMode ? "secondary" : "primary"}
            onClick={handleThemeChange}
          >
            {darkMode ? (
              <>
                <i className="fas fa-sun"></i> Modo Claro
              </>
            ) : (
              <>
                <i className="fas fa-moon"></i> Modo Escuro
              </>
            )}
          </Button>
          <Footer />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
