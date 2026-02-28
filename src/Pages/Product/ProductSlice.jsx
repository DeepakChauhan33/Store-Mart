import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    products: [],
    loading: false,
};


const productSlice = createSlice({
    name: "products",
    initialState,

    reducers: {


    }
})


export const { getProducts } = productSlice.actions;
export default productSlice.reducer;