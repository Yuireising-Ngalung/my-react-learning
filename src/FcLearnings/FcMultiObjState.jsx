import { Fragment, useState } from "react";

function FcMultiObjState(){

    const fruits = [
        {
            fruitName:'Apple',
            fruitPrice:100,
            fruitQuantity:'500kg'
        },
        {
            fruitName:'Mango',
            fruitPrice:70,
            fruitQuantity:'700kg'
        },
        {
            fruitName:'Banana',
            fruitPrice:50,
            fruitQuantity:'100kg'
        }
    ]

    const [fruit, setFruit] = useState(fruits);
    return <div>
        <h1>Function Multiple Object State</h1>
        <ul>
            {
                (fruit && fruit.length !== 0) 
                ? 
                    fruit.map((value, index, arr)=>{
                        const {fruitName,fruitPrice,fruitQuantity} = value;
                        return <Fragment key={index}>
                            <li>Fruit Name: {fruitName}</li>
                            <li>Fruit Price: {fruitPrice}</li>
                            <li>Fruit Quantity:{fruitQuantity}</li>
                            <hr />
                        </Fragment>
                    }) 
                
                : <h2>Currently Fruits are not available</h2>
            }
        </ul>
        
    </div>
}

export default FcMultiObjState;