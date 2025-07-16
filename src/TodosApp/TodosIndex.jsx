import { useState } from "react";
import TodosUI from "./TodosUI";

export default function TodosIndex(){

    const [todos, setTodos] = useState(['TODO - 1', 'TODO - 2']);
    const [input, setInput] = useState('');

    const handleInput = (event) => {
        setInput(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setTodos([...todos, input]);
    }

    const handleDelete = (todoIndex) => {

        const deleteItem = todos.filter((todo, index) => {
            return index !== todoIndex
        })

        setTodos(deleteItem);

        
    }

    return(<>
        <TodosUI 
            todos = {todos}
            input = {input}
            handleInput = {handleInput}
            handleSubmit = {handleSubmit}
            handleDelete = {handleDelete}
        />
    </>)
}