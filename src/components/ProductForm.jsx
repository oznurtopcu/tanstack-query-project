import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";


//ilk olarak mutation fonksiyonunu çalıştıracaksın
const updateProduct = async (product) => {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', product);
    console.log(response.data);
    return response.data;
}

export default function ProductForm() {
    const [product, setProduct] = useState({title:''});
    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: updateProduct,
        onSuccess: () => {
            // başarılı olduğu durumda hafızaya bu queryKey ile saklanan verinin değiştiğini bildirir, bu sayede arka planda tekrar istek atılır
            queryClient.invalidateQueries({queryKey: ['product']});
            //çalıştığımız api bir sahte api olduğu için gerçekten gönderilen veriyi kaydetmiyor, o yüzden eklediğimiz son eleman dönmüyor!!!
            //return ifadesi {title: 'fhhgfjgh', id: 101}
        }
    });
    const handleChange = (e) => {
        const {name, value} = e.target;
        setProduct({ ...product,[name]: value});
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        //burada mutation fonksiyonunu çalıştıracaksın
        mutation.mutate(product);
    }
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="newProduct">Add New Product</label>
            <input id="newProduct" type="text" name="title" value={product.title} onChange={handleChange}/>
            <button type="submit">Gönder</button>
        </form>
    );
}