import { useEffect, useReducer, useState } from "react";
import UseEffectUI from "./UseEffectUI";
import axios from "axios";


export default function EntryPageUseEffect(){

    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({});


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


    //=============UPDATE EXISTING DATA==================
    const handleUpdate = (userIndex) => {
        const updateUser = {
            id:101,
            first_name:'Yuireising', 
            last_name:'Ngalung', 
            email:'test@gmail.com'
        }

        const updatedUser = users.map((user,index)=>{
            if(index === userIndex){
                return {...user, ...updateUser}
            }

            return user;
        })

        setUsers(updatedUser)


    }
    //==================DELETE USER DATA======================
    const handleDelete = (userIndex) => {
        const userDelete = users.filter((user,index)=>{
            return index !== userIndex;
        })

        setUsers(userDelete);

    }


    //==================ADD NEW USER======================
    const handleAddNewUser = () => {
        const form = document.getElementById('newUserForm');
        if(form){
            form.style.display = (form.style.display === 'none' || form.style.display === '') ? 'block' : 'none';
        }
        
    }

    const handleNewUserOnchange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setNewUser({...newUser,[name]:value})
    }

    const handleNewUserSubmit = (event) => {
        event.preventDefault();
        console.log(newUser);
        console.log(users);
        setUsers([...users, newUser])
        console.log([users, newUser])

        const form = document.getElementById('newUserForm');
        if (form) form.style.display = 'none'; // optionally hide form
    }



    return(<>
        
        <UseEffectUI 
            users = {users} 
            handleUpdate = {handleUpdate}
            handleDelete = {handleDelete}
            handleAddNewUser = {handleAddNewUser}
            handleNewUserSubmit = {handleNewUserSubmit}
            handleNewUserOnchange = {handleNewUserOnchange}
        />
        
    </>)
}