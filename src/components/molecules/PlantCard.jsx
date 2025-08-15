import styles"./PLantCard.module.css";
export default PlantaCard;

function PlantaCard({ name = "", price = 0, sauces = [], imgSrc = null }) {
  return (
    <div className="DishCard">
      <div>
        <h3>{name}</h3>
        <p>R$ {price.toFixed(2)}</p>
        <p>Molhos: {sauces.join(', ')}</p>
      </div>
      <img src={imgSrc} alt={`Foto do ${name}`} />
    </div>
  );
}
