import axios from "axios";
import { Context } from "./context/Context";
import { useEffect, useState } from "react";

export default function Context_Provider({children}){

    const [products, setProducts] = useState(null);
    const [userData,setUserData] = useState(null);

    const [theme, setTheme] = useState('light');

    useEffect(()=>{
        api_calling();
    }, [])
    


    const url = 'https://fakestoreapi.com/products';

    const api_calling = () => {
        axios.get(url)
        .then(response => response.data)
        .then(data => setProducts(data))
        .catch(error => console.log("Error:", error))
    }

    

    const login = (userEmail, userPassword) => {
        setUserData({email:userEmail, password:userPassword})
        console.log("Email id is: ", userEmail, "Password is :", userPassword);
    }

    const logout = (userEmail, userPassword) => {
        setUserData(null);
    }


    return(
        
        <Context.Provider value={{products, setProducts, login, userData, logout}}>
            {children}
        </Context.Provider>

        
    )
}