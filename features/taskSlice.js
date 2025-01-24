import { createSlice } from "@reduxjs/toolkit"

const taskSlice=createSlice({
    name:"tasks",
    initialState:{
        value:[],
    },
    reducers:{
        add:(state,action)=>{
            state.value.push(action.payload);
        },
        del:(state,action)=>{
            state.value=action.payload;
        },
    }
})

export const {add,del} = taskSlice.actions;
export default taskSlice.reducer