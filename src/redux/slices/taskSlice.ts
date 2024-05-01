import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: JSON.parse(localStorage.getItem("tasks")) || [],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask(state, action) {
      state.tasks.push(action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    updateTask(state, action) {
      const { taskId, updatedTask } = action.payload;
      state.tasks = state.tasks.map((task) =>
        task.id === taskId ? { ...task, ...updatedTask } : task
      );
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    deleteTask(state, action) {
      const taskId = action.payload;
      state.tasks = state.tasks.filter((task) => task.id !== taskId);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
  },
});

export const { addTask, updateTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
