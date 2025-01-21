import React, { useState, useEffect } from 'react';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import Notification, { showToast } from '../components/Notification';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  const addTask = (task) => {
    setTasks([...tasks, task]);
    showToast('Task added successfully!');
  };

  const completeTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, status: 'Completed' } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
    showToast('Task deleted!');
  };

  return (
    <div>
      <Notification />
      <TaskForm onAddTask={addTask} />
      <br></br>
      <input
        type="text"
        placeholder="Search tasks"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <select onChange={(e) => setStatusFilter(e.target.value)}>
        <option value="">All</option>
        <option value="Pending">Pending</option>
        <option value="Completed">Completed</option>
      </select>
      <TaskList 
        tasks={tasks} 
        onComplete={completeTask} 
        onDelete={deleteTask}
        searchQuery={searchQuery}
        statusFilter={statusFilter}
      />
    </div>
  );
};

export default Dashboard;
