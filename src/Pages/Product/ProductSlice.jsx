import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    products : [],
    loading: false,
};


const productSlice = createSlice({
    name : "products",
    initialState,
    
    reducers:{

        getProducts : async (state, action)=>{
            try {
                let response = await axios.get("https://fakestoreapi.com/products");
                console.log(response.data)
                state.products.push(response.data);
            } catch (error) {
                console.log(error)
            }
        }
    }
})


export const {getProducts} = productSlice.actions;
export default productSlice.reducer;