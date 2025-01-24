import { createSlice } from "@reduxjs/toolkit"

const taskSlice=createSlice({
    name:"task",
    initialState:{
        value:[],
    },
    reducers:{
        addTask:(state,action)=>{
            state.value.push(action.payload);
        },
        deleteTask:(state,action)=>{
            const index=action.payload;
            const updatedTasks = state.value.filter((_, i) => i !== index);
            state.value=updatedTasks;
        },
    }
})

export const {addTask,deleteTask} = taskSlice.actions;
export default taskSlice.reducer