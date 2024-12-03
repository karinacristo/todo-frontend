import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  // Se desejar estilos exclusivos para o Navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>To-Do App</h2>
      </div>
      <div className="navbar-links">
        <Link to="/home" className="navbar-link">Home</Link>
        <Link to="/tasks" className="navbar-link">Tasks</Link>
        <Link to="/login" className="navbar-link">Login</Link>
        <Link to="/signup" className="navbar-link">Signup</Link>
      </div>
    </nav>
  );
};

export default Navbar;
