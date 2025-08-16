import styles from "./PriceTag.module.css";

export default function PriceTag({ value = 0 }) {
  return <div className={styles.PriceContainer}>R$ {value.toFixed(2)}</div>;
}
