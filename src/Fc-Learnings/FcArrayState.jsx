import React, { Fragment, useState } from "react";

function FcArrayState(){

    const [product, setProduct] = useState(['Apple','Banana','Mango','Grapes']);

    return <div>
        <h1>Array Function State</h1>
        <h3>List of Products</h3>
        <ul>
            {
                (product && product.length !== 0) ? 
                    product.map((value, index, arr)=>{
                        return <Fragment key={index}>
                            <li>{value}</li>
                            <li>{index}</li>
                        </Fragment>
                    })
                : <h1>Currently Products are not available</h1>
            }
        </ul>
        <button onClick={()=>{setProduct([...product,'Pineapple'])}}>Add Product</button>
        
    </div>
}

export default FcArrayState;