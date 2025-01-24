import { createSlice } from "@reduxjs/toolkit"

const buttonTextSlice = createSlice({
    name:'buttonText',
    initialState:{
        value:'ADD TASK',
    },
    reducers:{
        updateButtonText:(state,action)=>{
            state.value=action.payload;
        }
    },
})


export const {updateButtonText}=buttonTextSlice.actions;
export default buttonTextSlice.reducer;