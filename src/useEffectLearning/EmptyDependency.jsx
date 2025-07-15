import { useEffect, useState } from "react";

function EmptyDependency(){

    const css = {
        textAlign: 'center'
    }

    const [count, setCount] = useState(0);

    useEffect(()=>{
        setTimeout(()=>{
            setCount(prev => prev + 1)
        }, 1000)
    }, [])

    return(<>
        <h1 style={css}>useEffect Empty Dependency</h1>
        <hr />
        <p style={css}><b>Count:</b>{count}</p>
    </>)
}

export default EmptyDependency;