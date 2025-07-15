import { useEffect, useState } from "react";
import UI_JSONPlaceholder from "./UI_JSONPlaceholder";
import axios from "axios";

export default function Entry_JSONPlaceholder(){
    const [posts, setPosts] = useState(null);
    const [comments, setComments] = useState(null);
    const [albums, setAlbums] = useState(null);
    const [photos, setPhotos] = useState(null);
    const [todos, setTodos] = useState(null);
    const [users, setUsers] = useState(null);


    const [displayResponses, setDisplayResponses] = useState("loading...");
    const [resources, setResources] = useState('users');

    useEffect(()=>{
        console.log("Mounting");
        json_placeholder_api();
        console.log(displayResponses);
        console.log(resources)
    },[resources])

    

    const json_placeholder_api = async () => {

        let url = 'https://jsonplaceholder.typicode.com/'

        switch(resources){
            case 'users':       url += `${resources}`
                                setUsers(resources)
                                break;
            
            case 'posts':       url += `${resources}`
                                setPosts(resources)
                                break;
                            
            case 'comments':    url += `${resources}`
                                setComments(resources)
                                break;
            
            case 'photos':      url += `${resources}`
                                setPhotos(resources)
                                break;

            case 'todos':       url += `${resources}`
                                setTodos(resources)
                                break;
            
            case 'albums':      url += `${resources}`
                                setAlbums(resources)
                                break;
        }

        axios.get(url)
            .then(res => {
                setDisplayResponses(res.data)
                console.log(res.data)
            })
            .catch(error => console.log(error))
        
    }

    const handleChange = (event) => {
        setResources(event.target.value);
    }

    return(<>
        <div className="uiWrapper">
            <UI_JSONPlaceholder 
                posts = {posts}
                comments = {comments}
                albums = {albums}
                photos = {photos}
                todos = {todos}
                users = {users}
                handleChange = {handleChange}
                resources= {resources}
                displayResponses = {displayResponses}
            />
        </div>
    </>)
}