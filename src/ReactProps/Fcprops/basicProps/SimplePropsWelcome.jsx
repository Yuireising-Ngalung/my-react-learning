import { useState } from "react";
import SimplePropsMessage from "./SimplePropsMessage";

function SimplePropsWelcome(){

    const [name, setName] = useState('Yuiresing');
    const [age, setAge] = useState('27');
    const [location,setLocation] = useState('Chennai');
    return (
        <div>
            <h1>Hello Props</h1>

            <SimplePropsMessage 
            name={name} 
            age={age} 
            location={location} />
        </div>
    )
}

export default SimplePropsWelcome;