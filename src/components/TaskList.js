import React from 'react';

const TaskList = ({ tasks }) => {
  return (
    <div className="task-list">
      <h3>Your Tasks</h3>
      <ul>
        {tasks.map((task) => (
          <li key={task._id} className="task-item">
            <span>{task.title}</span>
            <button className="btn-delete">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
