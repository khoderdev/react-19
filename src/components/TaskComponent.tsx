// import React from "react";
// import { useDispatch } from "react-redux";
// import { updateTask, deleteTask } from "../redux/slices/taskSlice";

// function TaskComponent({ task }) {
//     const dispatch = useDispatch();

//     const handleCompleteTask = () => {
//         dispatch(updateTask({
//             taskId: task.id,
//             updatedTask: { completed: true }
//         }));
//     };

//     const handleDeleteTask = () => {
//         dispatch(deleteTask(task.id));
//     };

//     return (
//         <div className="task">
//             <h3>{task.title}</h3>
//             <p>Category: {task.category}</p>
//             <p>Due Date: {task.dueDate}</p>
//             <p>Priority: {task.priority}</p>
//             <p>Status: {task.completed ? "Completed" : "Pending"}</p>
//             <button onClick={handleCompleteTask}>Complete Task</button>
//             <button onClick={handleDeleteTask}>Delete Task</button>
//         </div>
//     );
// }

// export default TaskComponent;




import React from "react";
import { useDispatch } from "react-redux";
import { updateTask, deleteTask } from "../redux/slices/taskSlice";

function TaskComponent({ tasks }) {
    const dispatch = useDispatch();

    const handleCompleteTask = (taskId) => {
        dispatch(updateTask({
            taskId,
            updatedTask: { completed: true }
        }));
    };

    const handleDeleteTask = (taskId) => {
        dispatch(deleteTask(taskId));
    };

    return (
        <div>
            {tasks && tasks.length > 0 ? (
                tasks.map(task => (
                    <div key={task.id} className="task">
                        <h3>{task.title}</h3>
                        <p>Category: {task.category}</p>
                        <p>Due Date: {task.dueDate}</p>
                        <p>Priority: {task.priority}</p>
                        <p>Status: {task.completed ? "Completed" : "Pending"}</p>
                        <button onClick={() => handleCompleteTask(task.id)}>Complete Task</button>
                        <button onClick={() => handleDeleteTask(task.id)}>Delete Task</button>
                    </div>
                ))
            ) : (
                <p>No tasks available</p>
            )}
        </div>
    );
}

export default TaskComponent;
