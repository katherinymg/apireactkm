import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './assets/Pages/Cart';
import Footer from './assets/Components/Footer';
import Home from './assets/Pages/Home';
import Navbar from './assets/Components/Navbar';
import Register from './assets/Pages/Register';
import Login from './assets/Pages/Login';
import NotFound from './assets/Pages/NotFound';
import PizzaResume from './assets/Pages/PizzaResume';
import Profile from './assets/Components/Profile';
import { CartProvider } from './assets/Components/CartContext';
import { PizzaProvider } from './assets/Components/PizzaContext';

const App = () => {
  return (

    <PizzaProvider>
      <CartProvider>
    <BrowserRouter>
        <Navbar />
             <Routes>
          <Route path='/' element={ <Home />}/>
          <Route path='/login' element={ <Login />}/>
          <Route path='/register' element={ <Register />}/>
          <Route path='/cart' element={ <Cart />}/>
          <Route path='/pizza/p001' element={ <PizzaResume />}/>
          <Route path='/404' element={ <NotFound />}/>
          <Route path='/profile' element={ <Profile />}/>
          <Route path='*' element={ <NotFound />}/>
        </Routes>

        <Footer />
        
      </BrowserRouter>
      </CartProvider>
    </PizzaProvider>
  )
}

export default App;