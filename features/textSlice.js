import { createSlice } from "@reduxjs/toolkit"

const textSlice = createSlice({
    name:'text',
    initialState:{
        value:'',
    },
    reducers:{
        clear:(state)=>{
            state.value="";
        },
        update:(state,action)=>{
            state.value=action.payload;
        }
    },
})


export const {clear,update}=textSlice.actions;
export default textSlice.reducer;