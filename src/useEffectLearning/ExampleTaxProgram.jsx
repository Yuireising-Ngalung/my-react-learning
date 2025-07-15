import { useEffect, useState } from "react"

export default function ExampleTaxProgram(){

    const [price, setPrice] = useState(0);
    const [tax, setTax] = useState(0);

    useEffect(()=>{
        let taxResult = taxCalculation();

        taxResult && setTax(taxResult)

        return(()=>{
            taxResult = null
        })
    },[price])

    const taxCalculation = () =>{
        if(price > 1000)
            return price * 8/100
        else
            return price * 3/100
    }

    return(<>
        <h1>Tax Program</h1>
        <hr />
        <label htmlFor="price">Product Price:</label>
        <input type="number" name="price" id="price" onChange={(event)=> setPrice(event.target.value)} />
        <p>Current Price: {price}</p>
        <p>Tax: {tax}</p>
    </>)
}