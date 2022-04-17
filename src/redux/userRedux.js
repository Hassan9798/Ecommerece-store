import {createSlice} from '@reduxjs/toolkit';
const userSlice=createSlice({
name:'user',
initialState:{
    loggedInUser:null,
    isFetching:false,
    error:false
},
reducers:{
    loginStart:(state)=>{
        state.isFetching=true;
    },
    loginSuccess:(state,action)=>{
        state.loggedInUser=action.payload;
        state.isFetching=false;
    },
    loginFailure:(state)=>{ 
        state.isFetching=false;
        state.error=true;
    },
}
});
export const {loginStart,loginSuccess,loginFailure}=userSlice.actions;
export default userSlice.reducer;