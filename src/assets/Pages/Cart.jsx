import { useCart } from '../Context/CartContext';
import { useUser } from '../Context/UserContext';
import Swal from "sweetalert2";

const Cart = () => {
  const { cart, increaseQtty, decreaseQtty, calcTotal } = useCart(); 
  const { token } = useUser()
  
  return (
    <div className='cart-container'>
      <h1>Shopping Cart</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <img src={item.img} alt={item.name} />
            {item.name} - ${item.price.toLocaleString()}
            <button onClick={() => decreaseQtty(item.id)}><p>-</p></button>
            {item.count}
            <button onClick={() => increaseQtty(item.id)}><p>+</p></button>
          </li>
        ))}
      </ul>
      <h2>Total: ${calcTotal.toLocaleString()}</h2> 
      <button className='pay'>Ir a Pagar</button>
    </div>
  );
};

export default Cart;
