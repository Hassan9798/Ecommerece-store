import {createSlice} from '@reduxjs/toolkit';
const cartSlice=createSlice({
name:'cart',
initialState:{
    products:[],
    quantity:0,
    total:0
},
reducers:{
addProduct:(state,action)=>{
state.products.push(action.payload);
state.quantity += 1;
state.total += action.payload.price * action.payload.quantity

},
deleteProduct:(state,action)=>{

   state.products=state.products.filter((p)=>p._id !== action.payload._id);
//    localStorage.setItem('persist:root.cart.products','state.products.filter((p)=>p._id !== action.payload._id)')
    state.quantity -= 1;
    state.total -= action.payload.price * action.payload.quantity
    
    }
}
})
export const {addProduct,deleteProduct}=cartSlice.actions;
export default cartSlice.reducer;