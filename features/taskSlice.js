import { createSlice } from "@reduxjs/toolkit"

const taskSlice=createSlice({
    name:"tasks",
    initialState:{
        tasks:[],
    },
    reducers:{
        addTask:(state,action)=>{
            const newTask=action.payload;
            const prevTasks=state.tasks;
            state.tasks=[...prevTasks,newTask];
        },
        deleteTask:(state,action)=>{
            const index=action.payload;
            const updatedTasks = state.tasks.filter((_, i) => i !== index);
            state.tasks=updatedTasks;
        },
    }
})

export const {addTask,deleteTask} = taskSlice.actions;
export default taskSlice.reducer