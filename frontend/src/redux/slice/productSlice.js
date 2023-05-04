
import { createSlice } from "@reduxjs/toolkit";

const initialState={
products:[]
}


const productSlice=createSlice({
name:"product",
initialState,
reducers:{
addProduct(state,action){
return {
    ...state,
    products:action.payload.products
}
},



}
})


export default productSlice.reducer



