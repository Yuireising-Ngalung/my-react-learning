import { useState } from "react";
import Todos from "./Todos";

export default function IndexPage(){

    const [count,setCount] = useState(0);
    const [todos, setTodos] = useState(['First Todo']);

    const handleCount = () => {
        setCount(prev => prev + 1);
    }

    const handleAddTodos = () => {
        setTodos([...todos, 'New Todos']);
    }

    return<>
        <Todos todos = {todos} handleAddTodos = {handleAddTodos}/>
        <div className="container">
            <h2>Count: {count}</h2>
            <button onClick={handleCount}>Increment</button>
        </div>
    </>
}