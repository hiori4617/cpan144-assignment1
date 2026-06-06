import { useState } from 'react';

export default function TaskList() {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState<string[]>([]);

    const addTask = () => {
        if (task.trim() !== '') {
            setTasks([...tasks, task]);
            setTask('');
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder='Enter a task'
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button onClick={addTask}>Add Task</button>
            {tasks.length === 0 ? (
                <p>No tasks added yet.</p>
            ) : (
            <ul>
                {tasks.map((t, index) => (
                    <li key={index}>{t}</li>
                ))}
            </ul>
            )}
        </div>
    );
}