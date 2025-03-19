import { useParams } from 'react-router-dom';
import { usePizzas } from '../Context/PizzaContext';
import { useState, useEffect } from 'react';

const PizzaResume = () => {
  const { id } = useParams(); // obtenemos el id de la pizza desde la URL
  const { pizzas, loading, error } = usePizzas(); // obtenemos las pizzas desde el contexto
  
  const pizza = pizzas.find((p) => String(p.id) === id); // buscar la pizza por id
  
  if (loading) return <p className="text-center mt-5">Cargando pizza...</p>;
  if (error) return <p className="text-center mt-5 text-danger">Error: {error}</p>;
  if (!pizza) return <p className="text-center mt-5">Pizza no encontrada</p>;

  return (
    <div className="pizza-grid">
      <div className="pizza-tarjeta">
        <img src={pizza.img} alt={pizza.name} className="pizza-img" />
        
        <div className="pizza-info">
          <h3>{pizza.name}</h3>
          <h4><strong>Ingredientes:</strong></h4>
          <p>{pizza.desc}</p>
          <ul className="ingredientes">
            {pizza.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
          <p><strong>Precio: ${pizza.price}</strong></p>
          <button className="button">Añadir 🛒</button>
        </div>
      </div>
    </div>
  );
};

export default PizzaResume;
