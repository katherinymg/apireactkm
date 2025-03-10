import { useState } from "react";
import { useCart } from "../Components/CartContext"; // Importa el hook useCart

const CardPizza = ({ id, name, price, ingredients, img, desc }) => {
  const [showDesc, setShowDesc] = useState(false);
  const { addToCart } = useCart(); // Obtén la función addToCart desde el contexto

  // Función para manejar el click en el botón "Agregar"
  const handleAddToCart = () => {
    const product = { id, name, price, ingredients, img, desc }; // Crea el objeto del producto
    addToCart(product); // Llama a addToCart con el producto
  };

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

        {/* Botón para agregar el producto al carrito */}
        <button className="button" onClick={handleAddToCart}>Agregar</button>
      </div>
    </div>
  );
};

export default CardPizza;
