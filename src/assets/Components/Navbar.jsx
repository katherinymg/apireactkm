import { Link } from 'react-router-dom';
import { useCart } from '../Components/CartContext'; 

const Navbar = () => {
  const { calcTotal } = useCart();  // Usamos el hook useCart para obtener calcTotal
  const token = false; // Mantén el valor del token según corresponda

  return (
    <nav className="navbar navbar-expand navbar-light bg-dark">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link text-white">
                Pizza Mamma Mia!
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link text-white border border-white rounded">
                🍕Home
              </Link>
            </li>
            {token ? (
              <>
                <li className="nav-item">
                  <Link to="/profile" className="text-decoration-none ms-3 text-white">
                    Profile
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/logout" className="text-decoration-none ms-3 text-white">
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link to="/login" className="nav-link text-white border border-white rounded mx-2">
                    🔐Login
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/register" className="nav-link text-white border border-white rounded mx-2">
                    🔐Register
                  </Link>
                </li>
              </>
            )}
          </ul>
          
      
          <Link to="/cart">
            <button className="total btn border border-white text-white">
              🛒 Total: ${calcTotal.toLocaleString()} 
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

