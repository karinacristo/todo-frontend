// src/components/TaskForm.js
import React, { useState } from 'react';

const TaskForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description });
    setTitle(''); // Limpa o campo de título
    setDescription(''); // Limpa o campo de descrição
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Nova Tarefa</h3>
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Descrição"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button type="submit">Criar Tarefa</button>
    </form>
  );
};

export default TaskForm;
