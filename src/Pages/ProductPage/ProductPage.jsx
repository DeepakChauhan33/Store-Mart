import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetDynamicProductQuery } from '../Product/ProductApi';
const ProductsPage = () => {

    const { id } = useParams();

    const { data, isLoading } = useGetDynamicProductQuery(id);

    if (isLoading) return <p>Loading...</p>;

    return (
        <div>
            <h2>{data?.title}</h2>
            <img src={data?.image} alt={data?.title} />
            <p>{data?.description}</p>
        </div>
    );
};

export default ProductsPage
