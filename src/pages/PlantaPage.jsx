import PlantaGrid from "../components/organisms/PlantaGrid";
import imgRosa from "../components/assets/imgRosa.jpeg";
import imgTulipa from "../components/assets/imgTulipa.jpeg";
import imgOrquidea from "../components/assets/imgOrquidea.jpeg";
import imgGirasol from "../components/assets/imgGirasol.jpeg";
import imgMargarida from "../components/assets/imgMargarida.jpeg";
import imgLirio from "../components/assets/imgLirio.jpeg";
import styles from "./PlantaPage.module.css";

const PLANTA = [
  {
    id: 1,
    name: "Rosa",
    imagem: imgRosa,
    price: 29.90,
    categories: ["Sun"],
  },
  {
    id: 2,
    name: "Tulipa",
    imagem: imgTulipa,
    price: 39.90,
    categories: ["Sun"],
  },
  {
    id: 3,
    name: "Orquidea",
    imagem: imgOrquidea,
    price: 39.90,
    categories: ["Shade"],
  },
  {
    id: 4,
    name: "Girasol",
    imagem: imgGirasol,
    price: 19.90,
    categories: ["Sun"],
  },
  {
    id: 5,
    name: "Margarida",
    imagem: imgMargarida,
    price: 14.90,
    categories: ["Sun", "Shade"],
  },
  {
    id: 6,
    name: "Lirio",
    imagem: imgLirio,
    price: 32.90,
    categories: ["Shade"],
  },
];

export default function PlantaPage() {
  return (
    <div>
      <PlantaGrid plantas={PLANTA} />
    </div>
  );
}

  