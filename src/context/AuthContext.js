import React, { createContext, useState, useContext, useEffect } from 'react';
import { login } from '../services/authService';  // Importe a função de login do serviço

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  useEffect(() => {
    if (token) {
      // Verifica e define o usuário com base no token JWT
      // Você pode decodificar o token aqui, ou fazer uma requisição para verificar o usuário
    }
  }, [token]);

  const loginUser = async (email, password) => {
    const data = await login(email, password);
    setUser(data.user);  // Salva o usuário logado
    setToken(data.token); // Salva o token
    localStorage.setItem('token', data.token);  // Salva o token no localStorage
  };

  return (
    <AuthContext.Provider value={{ user, token, loginUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
