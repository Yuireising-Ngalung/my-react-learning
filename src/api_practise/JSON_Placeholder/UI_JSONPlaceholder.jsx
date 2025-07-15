import style from './style.module.css';

export default function UI_JSONPlaceholder({
    posts,
    comments,
    albums,
    photos,
    todos,
    users,
    handleChange,
    resources,
    displayResponses
}){
    return(<>
        <h1 className={style.header}>JSON Placeholder API</h1>
        <hr />

        <div className={style.resourcesContainer}>
            <select className={style.selectResources} onChange={(event) => handleChange(event)}>
                <option value="users">users</option>
                <option value="posts">posts</option>
                <option value="comments">comments</option>
                <option value="albums">albums</option>
                <option value="photos">photos</option>
                <option value="todos">todos</option>
            </select>

            <p>
                {
                    (resources === users && 
                        <>
                            <h1>Users</h1>
                            {JSON.stringify(displayResponses)}
                        </>
                    )
                }
                
                {
                    (resources === posts &&
                        <>
                            <h1>Posts</h1>
                            {JSON.stringify(displayResponses)}
                        </>                   
                    )
                    
                }


                {
                    (resources === comments && 
                        <>
                            <h1>Comments</h1>
                            {JSON.stringify(displayResponses)}
                        </>
                    )
                }

                {
                    (resources === albums && 
                        <>
                            <h1>Albums</h1>
                            {JSON.stringify(displayResponses)}
                        </>  
                    )
                }

                {
                    (resources === photos && 
                        <>
                            <h1>Photos</h1>
                            {JSON.stringify(displayResponses)}
                        </>
                    )
                }

                {
                    (resources === todos && 
                        <>
                            <h1>Todos</h1>
                            {JSON.stringify(displayResponses)}
                        </>
                    )
                }
                
            </p>
        </div>
    </>)
}