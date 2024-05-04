import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const TodosList = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        // Function to handle changes in localStorage
        const handleLocalStorageChange = () => {
            const storedTodos = localStorage.getItem('todos');
            if (storedTodos) {
                setTodos(JSON.parse(storedTodos));
            }
        };

        // Subscribe to changes in localStorage
        window.addEventListener('storage', handleLocalStorageChange);

        // Initialize todos from localStorage
        handleLocalStorageChange();

        // Clean up the subscription on component unmount
        return () => {
            window.removeEventListener('storage', handleLocalStorageChange);
        };
    }, []);

    return (
        <div>
            <h2>Todo List</h2>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span
                            style={{
                                textDecoration: todo.completed ? 'line-through' : 'none',
                            }}
                        >
                            {todo.text}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodosList;
