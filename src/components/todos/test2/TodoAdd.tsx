import { useAtom } from "jotai";
import { newTodoAtom, addTodoAtom } from "./store";

function TodoAdd() {
    const [text, textSet] = useAtom(newTodoAtom);
    const [, addTodo] = useAtom(addTodoAtom);

    return (
        <div >
            <input
                type="text"
                value={text}
                onChange={(evt) => textSet(evt.target.value)}
                placeholder="New todo"
            />
            <button onClick={() => addTodo()}>Add Todo</button>
        </div>
    );
}

export default TodoAdd;