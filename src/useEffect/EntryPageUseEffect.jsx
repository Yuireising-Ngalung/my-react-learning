import { useEffect, useReducer, useState } from "react";
import UseEffectUI from "./UseEffectUI";
import axios from "axios";


export default function EntryPageUseEffect(){

    const [users, setUsers] = useState();

    useEffect(()=> {
        fetchData();
    }, [])

    const url = 'https://reqres.in/api/users';

    const headers = {
        'x-api-key': 'reqres-free-v1'
    }

    const fetchData = async () => {
        axios.get(url, {headers:headers})
        .then(response => response.data.data)
        .then(data => setUsers(data))
        .catch(error => console.log(error))
    }

    const handleUpdate = (userIndex) => {
        console.log(userIndex);


    }

    const handleDelete = (userIndex) => {

        const deleteUser = users.filter((user, index) => {
            return index !== userIndex;
        })

        return deleteUser;
    }



    return(<>
        
        <UseEffectUI 
            users = {users} 
            handleUpdate = {handleUpdate}
            handleDelete = {handleDelete}
        />
        
    </>)
}