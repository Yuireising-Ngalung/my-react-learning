import { useEffect, useState } from "react";
import Table_API_UI from "./Table_API_UI";

export default function Table_API_Entry(){

    const [products, setProducts] = useState({});
    const [currentPage, setCurrenPage] = useState(1);

    useEffect(()=>{
        fetchProduct(currentPage);
    }, [currentPage])

    const fetchProduct = async(page) => {
        const response = await fetch(`https://reqres.in/api/users?page=${page}`, {
            method : 'GET',
            headers : {
                'Content-Type': 'application/json',
                'x-api-key': 'reqres-free-v1'
            }
        })

        const responseData = await response.json();

        console.log(responseData);

        setProducts(responseData);
    }


    const handleNextPage = () => {
        console.log("Next Button is Clicked");
        setCurrenPage(prev => prev + 1);
    }

    const handlePreviousPage = () => {
        console.log("Previous Button is Clicked");
        setCurrenPage(prev => prev - 1);
    }

    return(<div>
        <h1>Table API Entry</h1>
        <p>{JSON.stringify(products)}</p>
        <div>
            <Table_API_UI 
                products = {products}
                handlePreviousPage = {handlePreviousPage}
                handleNextPage = {handleNextPage}
            />
        </div>
    </div>)
}