import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, updateTask } from "../redux/slices/taskSlice";


function TaskManagerComponent() {
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.task.tasks);
    const [taskInput, setTaskInput] = useState("");

    const handleAddTask = () => {
        if (taskInput.trim()) {
            const [title, category, dueDate, priority] = taskInput.split(",").map((item) => item.trim());
            dispatch(
                addTask({
                    id: Date.now(),
                    title,
                    category,
                    dueDate,
                    priority,
                    completed: false,
                })
            );
            setTaskInput("");
        }
    };

    const handleTaskInputChange = (e) => {
        setTaskInput(e.target.value);
    };

    const handleTaskComplete = (taskId) => {
        const updatedTask = tasks.find(task => task.id === taskId);
        if (updatedTask) {
            dispatch(
                updateTask({
                    taskId,
                    updatedTask: { ...updatedTask, completed: !updatedTask.completed },
                })
            );
        }
    };

    return (
        <div className="task-manager">
            <h2>Task Manager</h2>
            <div className="add-task-form">
                <input
                    type="text"
                    value={taskInput}
                    onChange={handleTaskInputChange}
                    placeholder="Add new task: Title, Category, Due Date, Priority"
                />
                <button onClick={handleAddTask}>Add Task</button>
            </div>
            <TaskComponent tasks={tasks} />
            <div className="task-list">
                {tasks.map((task) => (
                    <div key={task.id} className={`task ${task.completed ? "completed" : ""}`}>
                        <h3>{task.title}</h3>
                        <p>Category: {task.category}</p>
                        <p>Due Date: {task.dueDate}</p>
                        <p>Priority: {task.priority}</p>
                        <button className="complete-btn" onClick={() => handleTaskComplete(task.id)}>
                            {task.completed ? "Undo" : "Complete"}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TaskManagerComponent;
