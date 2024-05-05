import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, editTodo, toggleTodo } from '../../redux/slices/todoSlice';

const Todo = () => {
    const [inputText, setInputText] = useState('');
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos.todos);

    const handleInputChange = event => {
        setInputText(event.target.value);
    };

    const handleAddTodo = () => {
        if (inputText.trim() !== '') {
            dispatch(addTodo(inputText));
            setInputText('');
        }
    };

    const handleEditTodo = (id, newText) => {
        // Make sure id and newText are defined
        if (id !== undefined && newText !== undefined) {
            dispatch(editTodo({ id, newText }));
        }
    };

    const handleToggleTodo = (id) => {
        // Find the todo object in the state based on its id
        const todoToToggle = todos.find(todo => todo.id === id);
        // Check if the todo object is found
        if (todoToToggle) {
            // Dispatch toggleTodo with the entire todo object as payload
            dispatch(toggleTodo({ id }));
        }
    };



    return (
        <div>
            <input type="text" value={inputText} onChange={handleInputChange} />
            <button onClick={handleAddTodo}>Add Todo</button>
            <ul>
                {todos && todos.map((todo) => (
                    <li key={todo.id}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => handleToggleTodo(todo.id)}
                        />
                        <span
                            style={{
                                textDecoration: todo.completed ? 'line-through' : 'none',
                            }}
                        >
                            {todo.text}
                        </span>
                        <button onClick={() => handleEditTodo(todo.id, prompt('Enter new text:', todo.text))}>
                            Edit
                        </button>
                    </li>
                ))}

            </ul>
        </div>
    );

};

export default Todo;
