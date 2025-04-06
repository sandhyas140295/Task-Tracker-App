import React from 'react';
import './index.css'

const TaskItem = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <span className="task-text" onClick={() => onToggle(task.id)}>
        {task.text}
      </span>
      <button className="delete-btn" onClick={() => onDelete(task.id)}>
        🗑️
      </button>
    </div>
  );
};

export default TaskItem;
