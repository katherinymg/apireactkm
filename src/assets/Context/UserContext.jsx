import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null); // Simulando la ausencia de token por defecto

  const login = (userToken) => {
    setToken(userToken); // Simula el inicio de sesión estableciendo un token
  };

  const logout = () => {
    setToken(null); // Limpiar el token cuando se cierra sesión
  };

  return (
    <UserContext.Provider value={{ token, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
