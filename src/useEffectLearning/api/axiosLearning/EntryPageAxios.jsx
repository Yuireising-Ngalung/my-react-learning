import { useEffect, useState } from "react";
import AxiosUI from "./AxiosUI";
import axios from "axios";


export default function EntryPageAxios(){

    const [userData, setUserData] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
    const [dataPerPage, setDataPerPage] = useState(null); 

    useEffect(()=>{
        fetchData();
        handlePreviousPage();
        handleNextPage();
    }, [currentPage])


    const fetchData = async() => {
        await axios.get(`https://reqres.in/api/users?page=${currentPage} `,{headers:{'x-api-key': 'reqres-free-v1'}})
        .then(response => {
            console.log(response.data);
            
            // user Data
            setUserData(response.data.data);

            // page
            setCurrentPage(response.data.page);

            //total pages
            setTotalPages(response.data.total_pages)
        })
        .catch(error => console.log(error))
    }

    // const handleDelete = (userID) => {
    //     const updatedUser = userData.filter((user)=>{
    //         if(user.id === userID){
    //             return setUserData(userData);
    //         }

    //         retusrn userData;
    //     })

    //     console.log(updatedUser);
    // }


    //handle pagination
    const handlePreviousPage = () => {
        setCurrentPage(prev => prev - 1);
    }

    const handleNextPage = () => {
        setCurrentPage(prev => prev + 1);
    }



    return(<div>
        <h1>Axios Learning</h1>

        <div>
            <AxiosUI 
                userData = {userData}
                // handleDelete = {handleDelete}
                currentPage = {currentPage}
                handlePreviousPage = {handlePreviousPage}
                handleNextPage = {handleNextPage}
            />
        </div>
    </div>)
}