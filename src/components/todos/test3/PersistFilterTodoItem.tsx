import React from "react";
import { atom, useAtom, useSetAtom } from "jotai";
import { atomFamily } from "jotai/utils";
import { nanoid } from "nanoid";

type Todo = {
    id: string;
    title?: string;
    completed?: boolean;
};

const todoAtomFamily = atomFamily(
    ({ title }: Todo) => atom({ title: title || "No Title", completed: false }),
    (a, b) => a.id === b.id
);

const filterAtom = atom<"all" | "completed" | "incompleted">("all");
const todosAtom = atom<string[]>([]);
const filteredAtom = atom((get) => {
    const todos = get(todosAtom);
    const filter = get(filterAtom);

    if (filter === "all") return todos;

    if (filter === "completed") {
        return todos.filter((id) => get(todoAtomFamily({ id })).completed);
    }

    return todos.filter((id) => !get(todoAtomFamily({ id })).completed);
});

const PersistFilterTodoItem = () => {
    const setTodos = useSetAtom(todosAtom);

    const remove = (id: string) => {
        setTodos((prev) => prev.filter((prevId) => prevId !== id));
        todoAtomFamily.remove({ id });
    };

    const add = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const title = (e.currentTarget.elements.namedItem("inputTitle") as HTMLInputElement).value;
        (e.currentTarget.elements.namedItem("inputTitle") as HTMLInputElement).value = "";

        const id = nanoid();
        todoAtomFamily({ id, title });
        setTodos((prev) => [...prev, id]);
    };

    const [filter, setFilter] = useAtom(filterAtom);

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(e.target.value as "all" | "completed" | "incompleted");
    };

    const [todos] = useAtom(filteredAtom);

    return (
        <div>
            <div className="filter">
                <label>
                    <input
                        type="radio"
                        name="filter"
                        value="all"
                        checked={filter === "all"}
                        onChange={handleFilterChange}
                    />
                    All
                </label>
                <label>
                    <input
                        type="radio"
                        name="filter"
                        value="completed"
                        checked={filter === "completed"}
                        onChange={handleFilterChange}
                    />
                    Completed
                </label>
                <label>
                    <input
                        type="radio"
                        name="filter"
                        value="incompleted"
                        checked={filter === "incompleted"}
                        onChange={handleFilterChange}
                    />
                    Incompleted
                </label>
            </div>
            <form className="todo-form" onSubmit={add}>
                <input name="inputTitle" placeholder="Type ..." />
                {todos.map((id) => (
                    <div key={id} className="item flex gap-2">
                        <TodoItem id={id} remove={remove} />
                    </div>
                ))}
            </form>
            <div className="persist-buttons">
                <button onClick={save}>Save to localStorage</button>
                <button onClick={load}>Load from localStorage</button>
            </div>
        </div>
    );
};

type TodoItemProps = {
    id: string;
    remove: (id: string) => void;
};

const TodoItem = ({ id, remove }: TodoItemProps) => {
    const [item, setItem] = useAtom(todoAtomFamily({ id }));
    const toggleCompleted = () =>
        setItem({ ...item, completed: !item.completed });
    return (
        <>
            <input
                type="checkbox"
                checked={item.completed}
                onChange={toggleCompleted}
            />
            <span style={{ textDecoration: item.completed ? "line-through" : "" }}>
                {item.title}
            </span>
            <button onClick={() => remove(id)}>Remove</button>
        </>
    );
};

export default PersistFilterTodoItem;
