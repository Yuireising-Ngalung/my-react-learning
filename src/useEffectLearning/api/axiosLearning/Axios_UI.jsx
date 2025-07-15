export default function Axios_UI({
    userData,
    currentPage,
    handlePreviousPage,
    handleNextPage
}){

    return(<div>

        <div className="table-container">
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>First_Name</th>
                        <th>Last_Name</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (userData && userData.length !== 0)?
                            userData.map((user) => {
                                const {id, email, first_name, last_name, avatar} = user;
                                return(<tr key={id}>
                                    <td>{id}</td>
                                    <td>{email}</td>
                                    <td>{first_name}</td>
                                    <td>{last_name}</td>
                                    <td><img src={avatar} alt={first_name} style={{width: '100%', height:'50px', objectFit:'contain'}}  /></td>
                                    <td>
                                        <button onClick={()=>{console.log(id)}}>Update</button>
                                        &nbsp; | &nbsp; 
                                        <button >Delete</button>
                                    </td>
                                </tr>)
                            })
                        :
                        <tr>
                            <td colSpan={10}>Currently !! No User Data Available</td>
                        </tr>
                    }
                </tbody>
                <tfoot>
                    <tr style={{textAlign:'center'}}>
                        <td colSpan={10}>
                            <button onClick={handlePreviousPage}>Previous</button>
                            &nbsp; {currentPage} &nbsp;
                            <button onClick={handleNextPage}>Next</button>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>

        {/* <p>{JSON.stringify(data)}</p> */}
    </div>)
}