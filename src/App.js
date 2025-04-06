import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    if (text.trim() === '') return;
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([newTask, ...tasks]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="app">
      <div className="tracker-container">
        <Header />
        <AddTask onAdd={addTask} />
        <TaskList tasks={tasks} onDelete={deleteTask} onToggle={toggleComplete} />
      </div>
    </div>
  );
}

export default App;
