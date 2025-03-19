import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
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
import { PizzaProvider } from './assets/Context/PizzaContext';
import { UserProvider } from './assets/Context/UserContext';
import { useUser } from './assets/Context/UserContext';

// PrivateRoute: Para que las rutas privadas solo sean accesibles si hay un token
const PrivateRoute = ({ children }) => {
  const { token } = useUser(); // Usamos el hook useUser para obtener el token
  return token ? children : <Navigate to="/login" />;
};

// PublicRoute: Para que las rutas públicas solo sean accesibles si no hay un token
const PublicRoute = ({ children }) => {
  const { token } = useUser(); // Usamos el hook useUser para obtener el token
  return !token ? children : <Navigate to="/" />;
};
const App = () => {
  return (
    <UserProvider>
    <PizzaProvider>
      <CartProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              {/* Rutas públicas. Solo si no hay token */}
              <Route path='/login' element={
                <PublicRoute>
                  <Login />
                </PublicRoute>

                } />

                {/* Rutas públicas. Solo si no hay token */}
              <Route path='/register' element={
                <PublicRoute>
                  <Register />
                </PublicRoute>

                } />

              <Route path='/cart' element={<Cart />} />
              <Route path='/pizza/:id' element={<PizzaResume />} />
              <Route path='/404' element={<NotFound />} />

                {/* Ruta PRIVADA. Solo si no HAY token */}
              <Route path='/profile' element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
                } />


              <Route path='*' element={<NotFound />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </CartProvider>
    </PizzaProvider>
  </UserProvider>

);
};

export default App;