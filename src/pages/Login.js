import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Certifique-se que o React Router está configurado
import { login } from '../services/api'; // Importe a função login

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Limpa erros anteriores

    try {
      const response = await login({ email, password });
      if (response.token) {
        localStorage.setItem('token', response.token); // Salva o token no localStorage
        console.log('Login bem-sucedido:', response);
        navigate('/dashboard'); // Redireciona para a página principal após o login
      } else {
        setError(response.error || 'Erro ao fazer login.');
      }
    } catch (err) {
      console.error('Erro ao fazer login:', err);
      setError('Erro ao conectar ao servidor.');
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="btn-primary">Login</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
