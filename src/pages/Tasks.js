// src/pages/Tasks.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) navigate('/login');
    
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/tasks', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setTasks(response.data);
      } catch (err) {
        setError('Erro ao carregar as tarefas');
      }
    };

    fetchTasks();
  }, [token, navigate]);

  const handleCreateTask = async (taskData) => {
    try {
      const response = await axios.post(
        'http://localhost:5000/api/tasks',
        taskData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setTasks([...tasks, response.data]);
    } catch (err) {
      setError('Erro ao criar a tarefa');
    }
  };

  const handleCompleteTask = async (taskId) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/tasks/${taskId}`,
        { completed: true },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setTasks(tasks.map(task => task._id === taskId ? response.data : task));
    } catch (err) {
      setError('Erro ao marcar tarefa como completa');
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${taskId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setTasks(tasks.filter(task => task._id !== taskId));
    } catch (err) {
      setError('Erro ao excluir tarefa');
    }
  };

  return (
    <div>
      <h1>Tarefas</h1>
      {error && <p>{error}</p>}
      <TaskForm onSubmit={handleCreateTask} />
      <TaskList tasks={tasks} onComplete={handleCompleteTask} onDelete={handleDeleteTask} />
    </div>
  );
};

export default Tasks;
