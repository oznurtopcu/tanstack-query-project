import React from "react";
import { useHistory } from "react-router-dom";

export default function Profile() {
    let history = useHistory();
    const handleClick = () => {
        history.push('/product');
    }
    return <button onClick={handleClick}>ProductList</button>
}