import { useState } from "react";

const CardPizza = ({ name, price, ingredients, img, desc }) => {
const [showDesc, setShowDesc] = useState(false);

  return (
    <div className="pizza-card">
      <img src={img} alt={name} className="pizza-img" width={250} />
      <h3>{name}</h3>
      <div className="pizza-info">
        <p><strong>Ingredientes:</strong></p>
        <ul className="ingredientes">
          {ingredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>

        <p><strong>Precio: ${price}</strong></p>

        
        <button className="button" onClick={() => setShowDesc(!showDesc)}>
          {showDesc ? "Ocultar descripción" : "Ver más"}
        </button>
        {showDesc && <p className="descripcion">{desc}</p>}

        <button className="button">Agregar</button>
      </div>
    </div>
  );
};

export default CardPizza;