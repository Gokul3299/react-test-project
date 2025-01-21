import React, { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('Low');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title) return;
        const newTask = {
            id: Date.now(),
            title,
            description,
            priority,
            status: 'Pending'
        };
        onAddTask(newTask);
        setTitle('');
        setDescription('');
        setPriority('Low');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <br></br>
            <br></br>
            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows="6"   // Height of 6 lines
                cols="50"
            />
            <br></br>

            <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
            >
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
            </select>
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;
