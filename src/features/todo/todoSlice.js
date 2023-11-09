import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todoItems: [],
    totalActiveItems: 0,
    isLoading: true
};

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            console.log("addTodo");
            console.log(state);
        },
        updateTodo: (state, action) => {
            console.log("updateTodo");
            console.log(state);
        },
        deleteTodo: (state, action) => {
            console.log("deleteTodo");
            console.log(state);
        },
        noOfActiveTodo: (state, action) => {
            console.log("noOfActiveTodo");
            console.log(state);
        }
    }
})

export const { addTodo,updateTodo,deleteTodo,noOfActiveTodo } = todoSlice.actions;
export default todoSlice.reducer;
