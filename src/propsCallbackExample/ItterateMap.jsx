import { useState,Fragment } from "react"

export  function ItterateMap({
       Array,
       handleSelect,
       handleDelete,
       handleUpdate
}){


    return <div>
        {
            (Array && Array.length !=0 ) ? 
            Array.map((value,index) => {
               
                    const {prdouctName,productSize,productPrice,productQty} = value

                return <Fragment key={index}>
                        {handleSelect && (
                            <div>
                                <input type="checkbox" value={index} onChange={ () => handleSelect(index) }  />
                            </div>

                         )}
                            <div> Product Name: {prdouctName ? prdouctName : null } </div>
                            <div> Product Size: {productSize} </div>
                             <div>Product Price: {productPrice} </div>
                            <div>Product Quantity: {productQty} </div><hr/>
                            { (handleUpdate && handleDelete)  &&(
                                <div>
                                    <button onClick={() => handleDelete(index)}>Delete</button>
                                    <button onClick={() => handleUpdate(index)}>Update</button>
                              </div>
                            )}
                              
                        </Fragment>
                                            
                      })
                
            : <h1> Currently product Not available</h1>
        }  
    </div>
}