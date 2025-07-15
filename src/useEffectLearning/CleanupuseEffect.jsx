import {useState, useEffect } from "react";

function CleanupuseEffect(){
    const css = {
        textAlign: 'center'
    }

    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);

    useEffect(()=>{
        let multiply = count * 2;
        setCalculation(multiply)

        return() => multiply = null;
    }, [count])

    return(<>
        <h1 style={css}>Clear/Cleanup useEffect</h1>
        <p style={css}><b>Count:</b>{count} &nbsp; <button onClick={()=>setCount(count + 1)}>+</button></p>
        <p style={css}><b>Multiply:</b>{calculation}</p>
    </>)
}

export default CleanupuseEffect;