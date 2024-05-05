import { useAtom } from "jotai";

import {
    Todo,
    todosAtom,
    updateTodoAtom,
    removeTodoAtom,
    toggleTodoAtom,
} from "./store";

function TodoListItems() {
    const [todos] = useAtom(todosAtom);
    const [, updateTodo] = useAtom(updateTodoAtom);
    const [, removeTodo] = useAtom(removeTodoAtom);
    const [, toggleTodo] = useAtom(toggleTodoAtom);
    console.log(todos)
    return (
        <>
            {todos.map((todo: Todo) => (
                <div key={todo.id}>
                    <input type="checkbox" onClick={() => toggleTodo(todo.id)} checked={todo.done} />
                    <input
                        type="checkbox"
                        value={todo.text}
                        onChange={(evt) =>
                            updateTodo({ id: todo.id, text: evt.target.value })
                        }
                    />
                    <button onClick={() => removeTodo(todo.id)}>Delete</button>
                </div>
            ))}
        </>
    );
}

function TodoList() {
    return (
        <>
            <h1>Todo List</h1>
            <TodoListItems />
        </>
    );
}

export default TodoList;