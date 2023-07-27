import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:"user",
    initialState:{
        user:'user',
        token :null
    },
    reducers:{
        login:(state,action)=>{
            state.user=action.payload;
        },
        addToken:(state, action) =>{
            state.token  = action.payload;
        },
        logout:(state)=>{
            state.user=null;
        }
    }  
})
export const {login,logout , addToken}=userSlice.actions;

export const selectUser =(state)=>state.user.user;

export const selectUser1 =(state)=>state.user.token;

export default userSlice.reducer;