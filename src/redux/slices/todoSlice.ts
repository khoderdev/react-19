// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   todos: [],
// };

// const todoSlice = createSlice({
//   name: "todos",
//   initialState,
//   reducers: {
//     addTodo: (state, action) => {
//       const newTodo = {
//         id: Math.random().toString(36).substring(2, 9),
//         text: action.payload,
//         completed: false,
//       };
//       state.todos.push(newTodo);
//     },

//     editTodo: (state, action) => {
//       const { id, newText } = action.payload;
//       const todoToEdit = state.todos.find((todo) => todo.id === id);
//       if (todoToEdit) {
//         todoToEdit.text = newText;
//       }
//     },
//     toggleTodo: (state, action) => {
//       const { id } = action.payload;
//       const todoToToggle = state.todos.find((todo) => todo.id === id);
//       if (todoToToggle) {
//         todoToToggle.completed = !todoToToggle.completed;
//       }
//     },
//   },
// });

// export const { addTodo, editTodo, toggleTodo } = todoSlice.actions;

// export default todoSlice.reducer;
// todoSlice.js

import { createSlice } from "@reduxjs/toolkit";

// Load todos from localStorage
const storedTodos = localStorage.getItem('todos');
const initialState = {
  todos: storedTodos ? JSON.parse(storedTodos) : [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Math.random().toString(36).substring(2, 9),
        text: action.payload,
        completed: false,
      };
      state.todos.push(newTodo);
      // Save todos to localStorage
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },

    editTodo: (state, action) => {
      const { id, newText } = action.payload;
      const todoToEdit = state.todos.find((todo) => todo.id === id);
      if (todoToEdit) {
        todoToEdit.text = newText;
      }
      // Save todos to localStorage
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },

    toggleTodo: (state, action) => {
      const { id } = action.payload;
      const todoToToggle = state.todos.find((todo) => todo.id === id);
      if (todoToToggle) {
        todoToToggle.completed = !todoToToggle.completed;
      }
      // Save todos to localStorage
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
  },
});

export const { addTodo, editTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;
