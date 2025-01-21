import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onComplete, onDelete, searchQuery, statusFilter }) => {
    const filteredTasks = tasks
        .filter(task => task.title.toLowerCase().includes(searchQuery.toLowerCase()))
        .filter(task => statusFilter === '' || task.status === statusFilter);

    return (
        <div>
            {filteredTasks.map(task => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onComplete={onComplete}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
};

export default TaskList;
