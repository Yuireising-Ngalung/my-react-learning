import { useState } from "react";

function FcObjectState(){

    const listFruits = {
        fruitName:'Apple',
        fruitPrice:100,
        fruitQuantity:1000
    }

    const [fruit,setFruit] = useState(listFruits)
    return <div>
        <h1>Function Object State</h1>
        <ul>
            <li>Name:{fruit.fruitName}</li>
            <li>Price:{fruit.fruitPrice}</li>
            <li>Quantity:{fruit.fruitQuantity}</li>
        </ul>
    
        <button onClick={()=>{setFruit({fruitName:'Orange',fruitPrice:150, fruitQuantity:500})}}>Change Fruit</button>
    </div>
}

export default FcObjectState;