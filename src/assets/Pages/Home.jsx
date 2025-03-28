import { usePizzas } from "../Context/PizzaContext";
import CardPizza from "../Components/CardPizza";
import Header from "../Components/Header";
const Home = () => {
  const { pizzas, loading, error } = usePizzas();

  if (loading) return <p className="text-center">Cargando menu</p>;
  if (error) return <p className="text-center">Error: {error}</p>;

  return (
    <>
      <Header />
      <div className="contenedor-cards">
        <div className="cards">
          {pizzas.map((pizza) => (
            <CardPizza
              key={pizza.id}
              id={pizza.id}
              img={pizza.img}
              name={pizza.name}
              ingredients={pizza.ingredients}
              price={pizza.price}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;