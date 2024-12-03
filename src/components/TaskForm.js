import React, { useState } from 'react';

const TaskForm = ({ handleSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit({ title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <div className="form-container">
      <h2>Add a New Task</h2>
      <form onSubmit={onSubmit}>
        <input 
          type="text" 
          placeholder="Task Title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          required 
        />
        <textarea 
          placeholder="Task Description" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          required 
        />
        <button type="submit" className="btn-primary">Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
