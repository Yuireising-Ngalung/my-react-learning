import { useEffect, useState } from "react";

function WithDependency(){

    const css = {
        textAlign : 'center'
    }

    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(1);

    useEffect(()=>{
        setCalculation( () => count * 2);
    }, [count])


    return(<>
        <h1 style={css}>useEffect with dependency</h1>
        <hr />
        <p style={css}><b>Count:</b>{count} &nbsp; <button onClick={()=>setCount(count + 1)}>+</button></p>
        
        <p style={css}><b>Multiplication:</b>{calculation}</p>
    </>)
}

export default WithDependency;