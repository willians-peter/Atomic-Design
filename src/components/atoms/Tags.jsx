import styles from "./Tags.module.css";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export default function Tags({ categories = [] }) {
  return (
    <ul className={styles.TagsContainer}>
      {categories.map((cat) => (
        <li key={cat}>
          {cat === "Sun" ? <WbSunnyIcon /> : <DarkModeIcon />} {cat}
        </li>
      ))}
    </ul>
  );
}