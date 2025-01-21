import React from 'react';

const TaskItem = ({ task, onComplete, onDelete }) => {
    return (
        <div className="task-item">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Status: {task.status}</p>
            <p>Priority: {task.priority}</p>
            <button onClick={() => onComplete(task.id)}>Mark as Completed</button>
            <button onClick={() => onDelete(task.id)}>Delete</button>
        </div>
    );
};

export default TaskItem;
