import { createContext, useState, useContext } from "react";


const CartContext = createContext();


export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

 
  const addToCart = (product) => {
    setCart((prevCart) => {
     
      let newCart = [...prevCart];
  
     
      const existingProductIndex = newCart.findIndex((item) => item.id === product.id);
  
      if (existingProductIndex !== -1) {
        
        newCart[existingProductIndex] = {
          ...newCart[existingProductIndex],
          count: newCart[existingProductIndex].count + 1,
        };
      } else {
    
        newCart.push({ ...product, count: 1 });
      }
  
      console.log("Carrito actualizado:", newCart); 
  
      return newCart; 
    });
  };
  
  
  


  const increaseQtty = (id) => {
    setCart((prevCart) => 
      prevCart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const decreaseQtty = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, count: item.count - 1 } : item
        )
        .filter((item) => item.count > 0)
    );
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

 
  const calcTotal = cart.reduce((total, product) => total + product.price * product.count, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, increaseQtty, decreaseQtty, removeFromCart, calcTotal }}>
      {children}
    </CartContext.Provider>
  );
};


export const useCart = () => useContext(CartContext);