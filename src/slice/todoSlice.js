import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todo',
    initialState: true,
    reducers: {
        showTodo(state) {
            return state = false;
        },
        hideTodo(state) {
            return state = true;
        }
    }
});

export default todoSlice.reducer;

export const {showTodo, hideTodo} = todoSlice.actions;