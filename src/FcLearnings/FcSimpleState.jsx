import {useState}  from "react";

function FcSimpleState(){

    const [count, setCounter] = useState(0);

    return(
        <>
            <h1>Counter</h1>
            <button onClick = {()=>setCounter(count -1)}>-</button>
            <h2>Count: {count}</h2>
            <button onClick={()=> setCounter(count + 1)}>+</button>
        </>
        
    )
}

export default FcSimpleState;