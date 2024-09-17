import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const backendUrl = process.env.REACT_APP_BACKEND_URL; // Accessing environment variable

  useEffect(() => {
    fetch(`${backendUrl}/tasks`)
      .then(response => response.json())
      .then(data => setTasks(data))
      .catch(error => console.error(error));

  }, [backendUrl]);

  const addTask = () => {
    fetch(`${backendUrl}/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ task: newTask }),
    }).then(() => {
      setTasks([...tasks, { task: newTask }]);
      setNewTask('');
    });
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTask}
        onChange={e => setNewTask(e.target.value)}
        placeholder="Add new task"
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task.task}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
