import PlantaCard from "../molecules/PlantaCard";
import styles from "./PlantaGrid.module.css";

export default function PlantaGrid({ plantas = [] }) {
  return (
    <div className={styles.PlantaGridContainer}>
      {plantas.map((planta) => (
        <PlantaCard
          key={planta.id}
          name={planta.name}
          imagem={planta.imagem}
          price={planta.price}
          categories={planta.categories}
        />
      ))}
    </div>
  );
}