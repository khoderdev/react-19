import { useRef } from 'react';
import { todoAtom } from '../../states/atom';
import { useSetAtom } from 'jotai';

const Todo = () => {
    const setTodos = useSetAtom(todoAtom);
    const inputRef = useRef();
    console.log(setTodos)

    function handleAdd() {
        setTodos((todo) => [...todo, inputRef.current.value]);
        inputRef.current.value = "";
    }
    return (
        <div>
            <input
                type="text"
                ref={inputRef}
            />
            <button onClick={handleAdd}>Add Todo</button>
        </div>
    );
}
export default Todo;
