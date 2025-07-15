import { useState } from "react";
import FormUI from "./FormUI";
import FormUserList from "./FormUserList";

export default function FormEntry(){

    const [userData, setUserData] = useState({})
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(true)
    const [userList, setUserList] = useState([])

    
    const handlePreventDefault = (event) => {
        event.preventDefault();
        setUserList([...userList, userData]);
    }

    const handleInputOnchange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setUserData({...userData,[name]:value})

        if(userData.username && userData.password){
            setSubmitButtonDisabled(false);
        }
    }

    return(
        <div>
            <FormUI 
                handlePreventDefault = {handlePreventDefault}
                handleInputOnchange = {handleInputOnchange}
                submitButtonDisabled = {submitButtonDisabled}
            />

            <div>
                <FormUserList userList = {userList}/>
            </div>
        </div>    
    )
}