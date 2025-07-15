import { useEffect, useState } from "react";
import Form_Post_UI from "./Form_Post_UI";

export default function Form_Post_Entry(){

    const [userData, setUserData] = useState({});
    const [buttonDisabled, setButtonDisabled] = useState(true);

    const handleSubmit = async(event) =>{
        event.preventDefault();
        console.log("Submit button is Clicked");
        console.log(userData);


        try{

            const response = await fetch('https://reqres.in/api/users/111', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key':'reqres-free-v1'
                },
                body: JSON.stringify(userData)
            });
            
            console.log(response);

            
        } catch(error){
            console.log("Error:", error)
        }


    }

    const handleOnChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setUserData({...userData, [name]:value})

        if(userData.name && userData.job)
            return setButtonDisabled(false);

    }

    return(<div>
            <h1>POST API</h1>
            <div>
                <Form_Post_UI 
                    handleSubmit = {handleSubmit}
                    handleOnChange = {handleOnChange}
                    buttonDisabled = {buttonDisabled}
                />
            </div>
        </div>)
}