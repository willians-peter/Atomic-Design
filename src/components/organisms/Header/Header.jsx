import PlantStoreIcon from "../../assets/LocalFloristIcon.png";
import "./Header.css";

function Header() {
  return (
    <header className="Header">
      <div>
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
        <h1>Plant Store</h1>
        <div className="nav-links">
        <a href="#Footer">Contato</a>
        </div>
   
      </div>
    </header>
  );
}

export default Header;
