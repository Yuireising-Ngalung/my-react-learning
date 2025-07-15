import { useReducer } from "react";
import { initialValue,reducerAction } from "./counter.action";

export default function IndexPage(){

    const [state, dispatch] = useReducer(reducerAction, initialValue)

    return(<>
        <div className="container p-md-5 py-4 shadow border-top border-5 border-warning rounded-top">
            <h1>useReducer Hook | <span className="text-warning">Counter</span></h1>
            <hr />

            <h2>Count: {state}</h2>
            
            <div className="d-flex gap-2 flex-wrap">
                <button className="btn border" onClick={()=>dispatch({type:"add"})}>ADD</button>
                <button className="btn border" onClick={()=>dispatch({type:"sub"})}>SUB</button>
                <button className="btn border" onClick={()=>dispatch({type:"mul"})}>MUL</button>
                <button className="btn border" onClick={()=>dispatch({type:"div"})}>DIV</button>
                <button className="btn border" onClick={()=>dispatch({type:"mod"})}>MOD</button>
                <button className="btn border border-danger mx-1 text-danger" onClick={()=>dispatch({type:"reset"})}>Reset</button>
            </div>
            
        </div>
    </>)
}