import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Certifique-se que o React Router está configurado
import { signup } from '../services/api'; // Importe a função signup

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Limpa erros anteriores

    try {
      const response = await signup({ email, password });
      if (response.message) {
        console.log('Usuário criado com sucesso:', response);
        navigate('/login'); // Redireciona para a página de login após o cadastro
      } else {
        setError(response.error || 'Erro ao criar conta.');
      }
    } catch (err) {
      console.error('Erro ao criar conta:', err);
      setError('Erro ao conectar ao servidor.');
    }
  };

  return (
    <div className="signup-container">
      <h2>Crie sua conta</h2>
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
        <button type="submit">Cadastrar</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default Signup;
