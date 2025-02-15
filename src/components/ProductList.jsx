import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useHistory } from "react-router-dom";
import useFetchProduct from "../hooks/useFetchProduct";
import ProductForm from "./ProductForm";

// const fetchProduct = async() => {
//     const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts')
//     return data;
// }

export default function ProductList() {
    let history = useHistory();
    const {data, error, isLoading} = useFetchProduct('product', 3000);
    console.log(data);
    //const {data, error, isLoading} = useQuery({queryKey: ['product'], queryFn: fetchProduct, staleTime: 30000})
    const handleClick = () => {
        history.push('/');
    }

    if(isLoading) return <p>Loading Products...</p>;
    if(error) return <p>{error}</p>;

    return(
        <>
            <button onClick={handleClick}>Profile</button>
            <ProductForm/>
            <ul>
                {data.map((item, index) => {
                    return <li key={index}>{item.title}</li>
                })}
            </ul>
        </>
    );
}

//datanın yanına düzenle butonu koy, farklı bir sayfaya atsın(productForm), handleSubmit fonksiyonunda data id'si ile post isteği yap daha sonra iş bitiyor !!!!!!!!!!