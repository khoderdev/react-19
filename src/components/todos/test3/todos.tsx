// import React from "react";
// import { useAtom, useSetAtom } from "jotai";
// import { nanoid } from "nanoid";

// import { todoAtomFamily, filterAtom, filteredAtom, todosAtom, } from "../../../atom/store";
// import "./styles.css";

// const TodoList = () => {
//     const setTodos = useSetAtom(todosAtom);

//     const remove = (id: string) => {
//         setTodos((prev) => prev.filter((prevId) => prevId !== id));
//         todoAtomFamily.remove({ id });
//     };

//     const add = (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         const title = (e.currentTarget.elements.namedItem("inputTitle") as HTMLInputElement).value;
//         (e.currentTarget.elements.namedItem("inputTitle") as HTMLInputElement).value = "";

//         const id = nanoid();
//         todoAtomFamily({ id, title });
//         setTodos((prev) => [...prev, id]);
//     };
//     return (
//         <form className="todo-form" onSubmit={add}>
//             <Filter />
//             <input name="inputTitle" placeholder="Type ..." />
//             <Filtered remove={remove} />
//         </form>
//     );
// };

// const TodoItem = ({ id, remove }: TodoItemProps) => {
//     const [item, setItem] = useAtom(todoAtomFamily({ id }));
//     const toggleCompleted = () =>
//         setItem({ ...item, completed: !item.completed });
//     return (
//         <>
//             <input
//                 type="checkbox"
//                 checked={item.completed}
//                 onChange={toggleCompleted}
//             />
//             <span style={{ textDecoration: item.completed ? "line-through" : "" }}>
//                 {item.title}
//             </span>
//             <button onClick={() => remove(id)}>Remove</button>
//         </>
//     );
// };

// const Filter = () => {
//     const [filter, setFilter] = useAtom(filterAtom);

//     const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setFilter(e.target.value as "all" | "completed" | "incompleted");
//     };

//     return (
//         <div className="filter">
//             <label>
//                 <input
//                     type="radio"
//                     name="filter"
//                     value="all"
//                     checked={filter === "all"}
//                     onChange={handleFilterChange}
//                 />
//                 All
//             </label>
//             <label>
//                 <input
//                     type="radio"
//                     name="filter"
//                     value="completed"
//                     checked={filter === "completed"}
//                     onChange={handleFilterChange}
//                 />
//                 Completed
//             </label>
//             <label>
//                 <input
//                     type="radio"
//                     name="filter"
//                     value="incompleted"
//                     checked={filter === "incompleted"}
//                     onChange={handleFilterChange}
//                 />
//                 Incompleted
//             </label>
//         </div>
//     );
// };

// const Filtered = ({ remove }: { remove: (id: string) => void }) => {
//     const [todos] = useAtom(filteredAtom);

//     return (
//         <>
//             {todos.map((id) => (
//                 <div key={id} className="item flex gap-2">
//                     <TodoItem id={id} remove={remove} />
//                 </div>
//             ))}
//         </>
//     );
// };



// export default function JotaiTodo() {
//     return (
//         <div>
//             <h1>Jōtai</h1>
//             <TodoList />

//         </div>
//     );
// }





// // import React from "react";
// // import { useAtom, useSetAtom } from "jotai";
// // import { nanoid } from "nanoid";

// // import { todoAtomFamily, filterAtom, filteredAtom, todosAtom, serializeAtom } from "../../../atom/store";
// // import "./styles.css";

// // const TodoList = () => {
// //     const setTodos = useSetAtom(todosAtom);

// //     const remove = (id: string) => {
// //         setTodos((prev) => prev.filter((prevId) => prevId !== id));
// //         todoAtomFamily.remove({ id });
// //     };

// //     const add = (e: React.FormEvent<HTMLFormElement>) => {
// //         e.preventDefault();
// //         const title = (e.currentTarget.elements.namedItem("inputTitle") as HTMLInputElement).value;
// //         (e.currentTarget.elements.namedItem("inputTitle") as HTMLInputElement).value = "";

// //         const id = nanoid();
// //         todoAtomFamily({ id, title });
// //         setTodos((prev) => [...prev, id]);
// //     };
// //     return (
// //         <form className="todo-form" onSubmit={add}>
// //             <Filter />
// //             <input name="inputTitle" placeholder="Type ..." />
// //             <Filtered remove={remove} />
// //         </form>
// //     );
// // };

// // const TodoItem = ({ id, remove }: TodoItemProps) => {
// //     const [item, setItem] = useAtom(todoAtomFamily({ id }));
// //     const toggleCompleted = () =>
// //         setItem({ ...item, completed: !item.completed });
// //     return (
// //         <>
// //             <input
// //                 type="checkbox"
// //                 checked={item.completed}
// //                 onChange={toggleCompleted}
// //             />
// //             <span style={{ textDecoration: item.completed ? "line-through" : "" }}>
// //                 {item.title}
// //             </span>
// //             <button onClick={() => remove(id)}>Remove</button>
// //         </>
// //     );
// // };

// // const Filter = () => {
// //     const [filter, setFilter] = useAtom(filterAtom);

// //     const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //         setFilter(e.target.value as "all" | "completed" | "incompleted");
// //     };

// //     return (
// //         <div className="filter">
// //             <label>
// //                 <input
// //                     type="radio"
// //                     name="filter"
// //                     value="all"
// //                     checked={filter === "all"}
// //                     onChange={handleFilterChange}
// //                 />
// //                 All
// //             </label>
// //             <label>
// //                 <input
// //                     type="radio"
// //                     name="filter"
// //                     value="completed"
// //                     checked={filter === "completed"}
// //                     onChange={handleFilterChange}
// //                 />
// //                 Completed
// //             </label>
// //             <label>
// //                 <input
// //                     type="radio"
// //                     name="filter"
// //                     value="incompleted"
// //                     checked={filter === "incompleted"}
// //                     onChange={handleFilterChange}
// //                 />
// //                 Incompleted
// //             </label>
// //         </div>
// //     );
// // };

// // const Filtered = ({ remove }: { remove: (id: string) => void }) => {
// //     const [todos] = useAtom(filteredAtom);

// //     return (
// //         <>
// //             {todos.map((id) => (
// //                 <div key={id} className="item flex gap-2">
// //                     <TodoItem id={id} remove={remove} />
// //                 </div>
// //             ))}
// //         </>
// //     );
// // };

// // const Persist = () => {
// //     const [, dispatch] = useAtom(serializeAtom);
// //     const save = () => {
// //         dispatch({
// //             type: "serialize",
// //             callback: (value) => {
// //                 localStorage.setItem("serializedTodos", value);
// //             }
// //         });
// //     };
// //     const load = () => {
// //         const value = localStorage.getItem("serializedTodos");
// //         if (value) {
// //             dispatch({ type: "deserialize", value });
// //         }
// //     };
// //     return (
// //         <div className="persist-buttons">
// //             <button onClick={save}>Save to localStorage</button>
// //             <button onClick={load}>Load from localStorage</button>
// //         </div>
// //     );
// // };

// // export default function JotaiTodo() {
// //     return (
// //         <div>
// //             <h1>Jōtai</h1>
// //             <TodoList />
// //             <h3>Persist</h3>
// //             <Persist />
// //         </div>
// //     );
// // }
