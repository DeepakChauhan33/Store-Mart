import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Product/ProductSlice";

const Store = configureStore({
    reducer:{
        products : productReducer
    }
})


export default Store;