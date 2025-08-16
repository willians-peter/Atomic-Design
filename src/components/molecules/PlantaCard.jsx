
import PriceTag from "../atoms/PriceTag";
import Tags from "../atoms/Tags";
import styles from "./PlantaCard.module.css";

export default function PlantaCard({ id = "", name = "", imagem = "", price = "", categories = [] }) {
  return (
    <div className={styles.PlantaCardContainer}>
      <p>{name}</p>
      <div className={styles.midSection}>
        <img src={imagem} alt={"imagem da flor"} />
        <PriceTag value={price} />
      </div>
      <Tags categories={categories} />
    </div>
  );
}