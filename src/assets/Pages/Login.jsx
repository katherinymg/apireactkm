import { useState } from 'react';
import { useUser } from '../Context/UserContext';

const Login = () => {
  const { login } = useUser(); // Accede al método de login del contexto
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === 'test@test.com' && password === 'password123') {
      login('simulatedToken'); // Simula un login con un token
      setMessage('Ingreso exitoso');
    } else {
      setMessage('Credenciales incorrectas');
    }
  };

  return (
    <div className="login container mt-5">
      <form onSubmit={handleSubmit} className="w-50 mx-auto">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Ingresar
        </button>
      </form>
      {message && <p className="mt-3">{message}</p>}
    </div>
  );
};

export default Login;
