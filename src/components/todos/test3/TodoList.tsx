import React from "react";
import { useSetAtom } from "jotai";
import { nanoid } from "nanoid";
import { todosAtom, useTodoAtomFamily } from "../../../atom/store";

const TodoList = () => {
    const setTodos = useSetAtom(todosAtom);
    const [, todoAtomFamily] = useTodoAtomFamily();
    const [todos] = useFilteredAtom();

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

    return (
        <form className="todo-form" onSubmit={add}>
            <Filter />
            <input name="inputTitle" placeholder="Type ..." />
            <Filtered remove={remove} />
        </form>
    );
};

export default TodoList;
