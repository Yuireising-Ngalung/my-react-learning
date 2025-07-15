import { useReducer } from "react";
import { initialValue,reducerAction } from "./counter.action";

export default function IndexPage(){

    const [state, dispatch] = useReducer(reducerAction, initialValue)

    return(<>
        <div className="container p-5 shadow border-top border-5 border-warning rounded-top">
            <h1>useReducer Hook | <span className="text-warning">Counter</span></h1>
            <hr />

            <h2>Count: {state}</h2>
            
            <button className="btn border mx-1" onClick={()=>dispatch({type:"add"})}>ADD</button>
            <button className="btn border mx-1" onClick={()=>dispatch({type:"sub"})}>SUB</button>
            <button className="btn border mx-1" onClick={()=>dispatch({type:"mul"})}>MUL</button>
            <button className="btn border mx-1" onClick={()=>dispatch({type:"div"})}>DIV</button>
            <button className="btn border mx-1" onClick={()=>dispatch({type:"mod"})}>MOD</button>
            <button className="btn border border-danger mx-1 text-danger" onClick={()=>dispatch({type:"reset"})}>Reset</button>
        </div>
    </>)
}