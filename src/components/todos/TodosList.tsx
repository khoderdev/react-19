import { todoAtom } from '../../states/atom';
import { useAtom } from 'jotai';

const TodosList = () => {
    const [todos] = useAtom(todoAtom);

    return (
        <div>
            <h2>Todo List</h2>
            <ul>
                {/* Map over the todos array and render each todo item */}
                {todos.map((todo, index) => (
                    // Each todo item should have a unique identifier as the key prop
                    <li key={index}>
                        {todo}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodosList;
