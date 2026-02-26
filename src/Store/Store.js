import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Pages/Product/ProductSlice";
import { ProductApi } from "../Pages/Product/ProductApi";

const Store = configureStore({
    reducer:{
        products : productReducer,
        [ProductApi.reducerPath]: ProductApi.reducer
    },

    middleware : (getDefaultMiddleware)=>
        getDefaultMiddleware().concat(ProductApi.middleware)
})


export default Store;