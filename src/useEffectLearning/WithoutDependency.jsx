import { useEffect, useState } from "react"

function WithoutDependency(){

    const css = {
        textAlign: 'center'
    }

    const [count, setCount] = useState(0);

    useEffect(()=>{
        setTimeout(()=>{
            setCount(prev => prev + 1)
        },1000)
    })

    return(<>
        <h1 style= {css}>useEffect without dependency</h1>
        <hr />
        <p style={css}><b>Count:</b>{count}</p>
    </>)
}


export default WithoutDependency;