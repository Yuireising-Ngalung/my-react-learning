import { Fragment } from "react/jsx-runtime";

function Iterate({
    fruits,
    handleDelete,
    handleUpdate,
    handleAdd
}){
    
    
    return(<>
        <h1>Display the list of Fruits</h1>

        {/* Display/loop the list*/}
        {
            (fruits && fruits.length !== 0 )? 
                fruits.map((value, index) => {

                    const {name, price, quantity} = value;

                    return(<Fragment key = {index}>
                        <p>Product Name: {name}</p>
                        <p>Product Price: {price}</p>
                        <p>Product Quantity:{quantity}</p>
                        <button onClick={()=> handleUpdate(index)}>Update</button>
                        <button onClick={() => handleDelete(index)}>Delete</button>
                        <hr />
                    </Fragment>);
                })
            :
            <h1>Fruits are not available</h1>
        }
        <button onClick={handleAdd}>Add Fruits</button>
    </>)
}

export default Iterate;