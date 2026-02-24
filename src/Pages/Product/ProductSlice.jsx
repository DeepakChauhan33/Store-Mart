import { createSlice } from "@reduxjs/toolkit";

const initState = {
    products : [],
    loading: false
};


const productSlice = createSlice({
    name : "products",
    initState,
    
    reducers:{
        addProducts : (state, action)=>{
            state.products.push(action.payload)
        }
    }
})


export const {addProducts} = productSlice.actions;
export default productSlice.reducer;