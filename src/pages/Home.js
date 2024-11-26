// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Bem-vindo ao Todo App</h1>
      <p>
        <Link to="/login">Faça login para ver suas tarefas</Link>
      </p>
    </div>
  );
};

export default Home;
