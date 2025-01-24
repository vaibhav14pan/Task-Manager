import { createSlice } from "@reduxjs/toolkit"

const textSlice = createSlice({
    name:'inputText',
    initialState:{
        value:'',
    },
    reducers:{
        clearInputText:(state)=>{
            state.value="";
        },
        updateInputText:(state,action)=>{
            state.value=action.payload;
        }
    },
})


export const {clearInputText,updateInputText}=textSlice.actions;
export default textSlice.reducer;