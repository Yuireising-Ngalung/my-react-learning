import { useState } from "react";
import Iterate from "./Iterate";

function Product(){

    //List of Fruits
    const listOfFruits = [
        {name:'Apple', price:100, quantity: '500kgs'},
        {name:'Mango',price:150, quantity: '300kgs'},
        {name:'Banana', price:80, quantity:'150kgs'}
    ]
    const [fruits, setFruits] = useState(listOfFruits);

    //Update Product 
    const handleUpdate = (fruitIndex) => {
        const updateFruit = {
            name: 'Grapes',
            price: 80,
            quantity: '200kgs'
        }

        const updatedFruit = fruits.map((value, index) => {
            if(index === fruitIndex){
                return updateFruit
            }

            return value;
        })

        setFruits(updatedFruit);
    }
    
    
    //Delete product
    const handleDelete = (fruitIndex) =>{
        const updateState = fruits.filter((value, index)=> index !== fruitIndex);
        setFruits(updateState);
    }

    //Add or Create fruit
    const handleAdd = () => {
        const newFruit ={
            name: 'Pineapple',
            price: 50,
            quantity: '500kgs'
        }

        setFruits([...fruits, newFruit]);
    }


    return(<>
        <Iterate 
            fruits = {fruits} 
            handleDelete = {handleDelete}
            handleUpdate = {handleUpdate}
            handleAdd = {handleAdd}
        />
    </>)
}

export default Product;