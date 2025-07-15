// In React, a "props callback" refers to a function that is passed as a prop from a parent component to a child component. This mechanism allows the child component to communicate back to its parent, enabling a flow of data and actions from the child up to the parent.


import { useState } from "react";
import PropsCallback_button from "./PropsCallback_button";

function PropsCallback_index(){


    const [count, setCount] = useState(0);

    //ADDITION
    const add = (num) => {
        setCount(count + num)
    }

    //SUBTRACTION
    const sub = (num) => {
        setCount(count - num)
    }

    //MULTIPLICATION
    const mul = (num) => {
        setCount(count * num)
    }

    //DIVISION
    const div = (num) => {
        setCount(count / num)
    }





    return(<>
        <h1>Props Callback </h1>
        <h3>Count: {count}</h3>
        <PropsCallback_button
            add = {add}
            sub = {sub}
            mul = {mul}
            div = {div}
        />
    </>)  
}

export default PropsCallback_index;