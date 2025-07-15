import { useState } from "react";

function PropsCallback_button({add, sub, mul, div}){


    const [userInput, setUserInput] = useState('');

    const handleInput = (event) =>{

        setUserInput(Number(event.target.value));
    }
    return(<>
        <input type="number" value={userInput} onChange={handleInput} placeholder="enter number"/><br/><br/>

        <button onClick={() => add(userInput)}>ADDITION</button>
        <button onClick={() => sub(userInput)}>SUBTRACTION</button>
        <button onClick={() => mul(userInput)}>MULTIPLICATION</button>
        <button onClick={() => div(userInput)}>DIVISION</button>
    </>)
}

export default PropsCallback_button;