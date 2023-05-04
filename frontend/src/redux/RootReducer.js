import {combineReducers}  from "@reduxjs/toolkit"
import productReducer from "./slice/productSlice"


export default rootReducer=combineReducers({
     product:productReducer,
     
})