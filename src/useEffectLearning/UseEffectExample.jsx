import { useEffect, useState } from "react";


export default function UseEffectExample(){
    const [count, setCount] = useState(0);

    useEffect(()=>{
        setTimeout(()=>{
            setCount((count) => count + 1);
        }, 1000)
    });

    return(<>
        <h1>useEffect Example</h1>
        <h2>I've rendered {count} times!</h2>
    </>)
}