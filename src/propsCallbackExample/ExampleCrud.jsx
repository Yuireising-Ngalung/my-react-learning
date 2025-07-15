
import { Fragment, useEffect, useState } from "react"
import { Button } from "./Button"
import { ItterateMap } from "./ItterateMap"


export default function ExampleCurd(){

    let product = [
        {
            prdouctName:"apple",
            productSize:"1 inch",
            productPrice:100,
            productQty:25
        },
         {
            prdouctName:"Orange",
            productSize:"2 inch",
            productPrice:200,
            productQty:25
        },
        {
            prdouctName:"Mango",
            productSize:"2 inch",
            productPrice:400,
            productQty:35
        }
]
    
    const [products,setProducts] = useState(product)
    const [selectedId,setSelectedId] = useState([])

    const handleUpdate = (profileIndex) => {

        let updateProdut ={
            prdouctName:"Pineapple",
            productSize:"10 inch",
            productPrice:4000,
            productQty:350
        }

        const updateState = products.map((value,index,arr)=>{
            if(profileIndex === index ){
                value = updateProdut
            }
            return value
        })
        setProducts(updateState)
    }
    const handleDelete = (profileIndex) => {
        const updateState = products.filter((value,index,arr)=> index !== profileIndex)
        setProducts(updateState)
    }
    const handleNewRecord = () => {
        let newProduct ={
            prdouctName:"Lichi",
            productSize:"1 inch",
            productPrice:200,
            productQty:1000
        }
        setProducts([...products,newProduct])
    }

    const handleBulkDelete = () => {

        const updateState = products.filter((value,index,arr) => selectedId.includes(index) == false ) 
         setProducts(updateState)
    }
    const handleSelect =(index) => {
        setSelectedId([...selectedId,index])
        
    }
    return  <div>
                <h1> All Product</h1>
    
                {/* <Button 
                    selectedId = {selectedId}
                    buttonType = "BulkDelete"
                    handleBulkDelete = {handleBulkDelete}
                /> */}
               
                 {/* <ItterateMap Array = {products}  
                    handleDelete = {handleDelete}
                    handleUpdate = {handleUpdate}
                    handleSelect={handleSelect}
                 
                 /> */}
                <div>
                     <button onClick={handleNewRecord}> Add New product </button>
                </div>
            </div>
 
}