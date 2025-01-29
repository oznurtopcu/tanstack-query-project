import { useQuery } from "@tanstack/react-query";
import axios from "axios";

//apiden tanstack query ile product list getiren bir custom hook yazdık 

export default function useFetchProduct(key, time) {

    const fetchProduct = async() => {
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts')
        return data;

        //return axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => res.data)
    }

    return useQuery({queryKey: [key], queryFn: fetchProduct, staleTime: time});

}