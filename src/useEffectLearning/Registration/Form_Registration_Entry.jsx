import { useState } from "react";
import Form_Registration_UI from "./Form_Registration_UI";

export default function Form_Registration_Entry(){

    const [userData, setUserData] = useState({});
    const [buttonDisabled, setButtonDisabled] = useState(true);

    const handleOnchange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setUserData({...userData, [name]:value})

        if(userData.profileName && userData.profileJob){
            setButtonDisabled(false)
        }
    }

    const handleSubmit = async (event) =>{
        event.preventDefault();
        console.log(userData);

        const payload = {
            'name' : userData.profileName,
            'job' : userData.profileJob
        }

        const options = getOptions(payload);

        let response = await fetch('https://reqres.in/api/users', options);
        let responseData = await response.json();

        console.log(responseData);

    }


    const getOptions = (payload) => {
        const options = {
            method : 'POST',
            headers : {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json',
                'x-api-key': 'reqres-free-v1'
            },
            body: JSON.stringify(payload)
        }

        return options;
    }



    return(<div>
        <h1>Registration Form (API - POST)</h1>

        <div className="form_container">
            <Form_Registration_UI 
                buttonDisabled = {buttonDisabled}
                handleOnchange = {handleOnchange}
                handleSubmit = {handleSubmit}
            />
        </div>
        
    </div>)
}