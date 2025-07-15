import { useEffect, useState } from "react"
import style from './apistyle.module.css';
import SimpleApi_UI from './SimpleApi_UI';



    export default function SimpleApi(){
        const [products, setProducts] = useState([]);
        const [filteredProducts, setFilteredProducts] = useState([]);
        const [pagination, setPagination]= useState('');
        const [categories, setCategories] = useState('all');
        const [search, setSearch] = useState('');

        useEffect(()=>{
            getProducts()
            //handlePagination()
        },[pagination, categories])

        async function getProducts(){
            let url = 'https://fakestoreapi.com/products';

            if(pagination){
              url += `?limit=${pagination}`  
            }

            if(categories !== 'all'){ 
                url += `/category/${categories}`
             }


            const response = await fetch(url);
            const responseData = await response.json()
            setProducts(responseData);
        }

        //Update delete product
        const handleUpdateProduct = (productId) => {

            const newProduct = {
                id:productId,
                title: 'Pendrive 64gb',
                price:'599'
            }

            const updatedProduct = products.map((product)=>{
                
                if(product.id === productId){
                    return {...product, ...newProduct}
                }
                else
                    return product
                
            })

            setProducts(updatedProduct);
            

        }

        //Handle delete product
        const handleDeleteProduct = (productId) =>{
            const returnProducts = products.filter((value) => productId !== value.id)

            setProducts(returnProducts);
        }

        //Pagination handle
        // const handlePagination = async (event) => {
        //     const response = await fetch(`https://fakestoreapi.com/products?limit=${pagination}`)
        //     const responseData = await response.json();
        //     setPagination(responseData);

        // }

        // search filter
        // const handleSearchFilter = (event) => {
        //     const usertype = event.target.value;
        //     setSearch(usertype);

        //     const filterSearch = products.filter((product) => {
        //         product.id.toString().includes(usertype);
        //     })

        //     setFilteredProducts(filterSearch);
        // }

        // const handleChangeCategories = (event) => {
        //     setCategories(event.target.value);
        //     console.log(categories);
        // }


        return(<>
                <SimpleApi_UI
                    products = {products}
                    setPagination = {setPagination}
                    handleUpdateProduct = {handleUpdateProduct}
                    handleDeleteProduct = {handleDeleteProduct}
                    // handleChangeCategories = {handleChangeCategories}
                    setCategories = {setCategories}
                />
                
                

                {/* <p>{JSON.stringify(products)}</p> */}

            </>)
    }