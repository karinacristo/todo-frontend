// src/components/Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove o token
    navigate('/login'); // Redireciona para a página de login
  };

  return (
    <nav>
      <h2>Todo App</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/tasks">Tasks</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
      {localStorage.getItem('token') && (
        <button onClick={handleLogout}>Logout</button>
      )}
    </nav>
  );
};

export default Navbar;
