import { createAction } from "@reduxjs/toolkit";

export const addTodo = createAction("todos/addTodo", (text) => ({
  payload: {
    id: Math.random().toString(36).substring(2, 9),
    text,
    completed: false,
  },
}));

export const editTodo = createAction("todos/editTodo", (id, newText) => ({
  payload: {
    id,
    newText,
  },
}));

export const toggleTodo = createAction("todos/toggleTodo", (id) => ({
  payload: {
    id,
  },
}));
