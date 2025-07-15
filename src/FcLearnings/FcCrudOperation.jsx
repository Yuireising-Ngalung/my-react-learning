import { useState } from "react";
import Iterate from "../Iterate/Iterate";


function FcCrudOperation(){
    

    const fruits = [
        {
            name:'apple',
            price:150,
            quantity:'300kgs'
        },

        {
            name:'Banana',
            price:60,
            quantity:'100kgs'
        },

        {
            name:'Mango',
            price:100,
            quantity:'500kgs'
        }
    ]

    const [fruit, setFruit] = useState(fruits);
    const [selectedItems, setSelectedItems] = useState([]); //✅ Track selected items

    //Handle checkbox toggles
    const handleSelect = (index) =>{
        if(selectedItems.includes(index)){
            setSelectedItems(selectedItems.filter((i) => i !== index));
        }
        else{
            setSelectedItems([...selectedItems, index]);
        }
    }

    // handle delete selected
    const handleDeleteSelected = () => {
        const updatedFruit = fruit.filter((_, index) => !selectedItems.includes(index));
        setFruit(updatedFruit);
        setSelectedItems([]);
    }


    //Update products
    function handleUpdate(FruitIndex){
        const newProduct = {
            
            price:50,
            name:'Pineapple',
            quantity:'1000kg'
        }

        const updateState = fruit.map((value, index, arr)=>{
            if(FruitIndex === index){
                return newProduct;
            }

            return value;
        })

        setFruit(updateState)
    }

    //Delete Products
    const handleDelete = (FruitIndex) =>{
        const updateState = fruit.filter((value, index, arr)=> index !== FruitIndex)
        setFruit(updateState);
    }

    
    //New Record
    const handleNewRecord = () =>{
        const newProduct = {
            name: 'Grapes',
            price: 50,
            quantity: '500kgs'
        }

        setFruit([...fruit,newProduct]);
    }

    return <div>
        <h1>Simple CRUD Operation</h1>
        <h2>List of Fruits</h2>

        {
            selectedItems.length > 0 && (
                <button onClick={handleDeleteSelected} style={{marginBottom:'10px'}}>
                    Delete Selected ({selectedItems.length})
                </button>
            )
        }
        <table border={1}>
            <thead>
                <tr>
                    <th>Select</th>
                    <th>SI. No.</th>
                    <th>Product Name</th>
                    <th>Product Price</th>
                    <th>Product Quantity</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    (fruit && fruit.length !== 0) ? 
                    fruit.map((value, index, arr)=>{
                        const {name,price,quantity} = value;
                        return(
                        <tr key={index}>
                            <td>
                                <input 
                                    type="checkbox" 
                                    checked={selectedItems.includes(index)}  
                                    onChange={()=>handleSelect(index)}>
                                </input>
                            </td>
                            <td>{index}</td>
                            <td>{name}</td>
                            <td>{price}</td>
                            <td>{quantity}</td>
                            <td>
                                <button onClick={()=>{handleUpdate(index)}}>Change Product</button>   
                                <button onClick={()=>{handleDelete(index)}}>Delete Product</button>
                            </td>

                        </tr> 
                    )})
                    :
                    <h2>Products are not available</h2> 
                }
            </tbody>
        </table>

        <div>
            <button onClick={handleNewRecord}>Add New Product</button>
        </div>

        
        
    </div>
}

export default FcCrudOperation;