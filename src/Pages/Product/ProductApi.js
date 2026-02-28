import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const ProductApi = createApi({

    reducerPath: "api",

    baseQuery: fetchBaseQuery({
        baseUrl: "https://fakestoreapi.com/"
    }),

    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => ({
                url: "products/",
                method: "GET"
            })
        }),

        getDynamicProduct: builder.query({
            query: (id) => ({
                url: `products/${id}`,
                method: "GET"
            })
        }),


    })
})



export const { useGetProductsQuery, useGetDynamicProductQuery } = ProductApi;
