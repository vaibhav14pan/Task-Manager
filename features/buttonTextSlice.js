import { createSlice } from "@reduxjs/toolkit"

const buttonTextSlice = createSlice({
    name:'addedit',
    initialState:{
        value:'ADD TASK',
    },
    reducers:{
        buttonTextUpdate:(state,action)=>{
            state.value=action.payload;
        }
    },
})


export const {buttonTextUpdate}=buttonTextSlice.actions;
export default buttonTextSlice.reducer;