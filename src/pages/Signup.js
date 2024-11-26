// src/pages/Signup.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/auth/signup', { email, password });
      // Salvar o token no localStorage após cadastro
      localStorage.setItem('token', response.data.token);
      navigate('/tasks'); // Redireciona para a página de tarefas após cadastro
    } catch (err) {
      setError('Erro ao cadastrar usuário');
    }
  };

  return (
    <div>
      <h1>Cadastro</h1>
      <form onSubmit={handleSignup}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Signup;
