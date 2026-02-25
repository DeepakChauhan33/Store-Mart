import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Pages/Product/ProductSlice";

const Store = configureStore({
    reducer:{
        products : productReducer
    }
})


export default Store;