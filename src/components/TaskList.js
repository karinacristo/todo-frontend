// src/components/TaskList.js
import React from 'react';

const TaskList = ({ tasks, onComplete, onDelete }) => {
  return (
    <div>
      <h3>Lista de Tarefas</h3>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            <h4>{task.title}</h4>
            <p>{task.description}</p>
            <p>{task.completed ? 'Concluída' : 'Pendente'}</p>
            <button onClick={() => onComplete(task._id)}>
              Marcar como completa
            </button>
            <button onClick={() => onDelete(task._id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
