// src/pages/Tasks.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Recuperar o token do localStorage (ou de onde estiver guardado)
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      navigate('/login'); // Se não estiver logado, redireciona para o login
    }

    // Requisição para buscar as tarefas
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/tasks', {
          headers: {
            Authorization: `Bearer ${token}`, // Envia o token no cabeçalho da requisição
          },
        });
        setTasks(response.data);
      } catch (err) {
        setError('Erro ao carregar as tarefas');
      }
    };

    fetchTasks();
  }, [token, navigate]);

  return (
    <div>
      <h1>Tarefas</h1>
      {error && <p>{error}</p>}
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <p>{task.completed ? 'Concluída' : 'Pendente'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
