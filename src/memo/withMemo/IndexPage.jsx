import { useState } from "react";
import Todos from "./Todos";

export default function IndexPage(){
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState(["Todos - 1", "Todos - 2"])

    console.log("Page Rendering");

    const handleIncrement = () => {
        setCount(prev => prev + 1)
        
    }
    return<>
        <Todos todos = {todos} />
        <div className="container shadow p-md-5 p-5 border-top border-5 border-info rounded">
            <h1>memo | <span className="text-info">Without memo</span></h1>
            <hr />
            <h3>Count: {count}</h3>
            <button className="btn btn-outline-info" onClick={handleIncrement}>Increment</button>
        </div>
    </>
}