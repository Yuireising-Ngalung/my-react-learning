import { useState } from "react";
import { ContextAPI } from "./ContextAPI";

export default function ContextProvider({children}){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [success, setSuccess] = useState('')
    const [errors,setErrors] = useState('')

    const login = (useremail, userpassword) => {
        {
            (useremail === 'admin@gmail.com' && userpassword === 'Admin@123') ?
                <>
                    {setEmail(useremail)}
                    {setPassword(userpassword)}
                    {setSuccess("Success")}
                </>
                    
                
            : setErrors("Invalid Email or password")
        }
    }

    const logout = () => {
        setEmail(null)
        setPassword(null)
    }

    return(
        <ContextAPI.Provider 
            value={{ 
                email, 
                password, 
                setEmail, 
                setPassword, 
                login, 
                logout, 
                success, 
                errors,  
                setSuccess, 
                setErrors}}>
            {children}
        </ContextAPI.Provider>
    )
}