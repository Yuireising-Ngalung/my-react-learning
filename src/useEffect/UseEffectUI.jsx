export default function UseEffectUI({users, handleUpdate, handleDelete}){
    return(<>
        <div className="container p-md-5 p-2 py-4 mt-5 border-top border-success border-5 rounded shadow">
            <h1>UseEffect | <span className="text-success">Fetch User Data from API</span></h1>
            <hr />
            <div className="overflow-x-auto">
                <table className="table">
                    <thead className="table-success">
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (users && users.length !== 0)
                            ?
                                users.map((user,index)=>{
                                    const {id, first_name, last_name, email, avatar} = user;

                                    return(
                                        <tr key={index}>
                                            <td>{id}</td>
                                            <td>{first_name}</td>
                                            <td>{last_name}</td>
                                            <td>{email}</td>
                                            <td className="d-flex gap-2">
                                                <button className="btn btn-success" onClick={() => handleUpdate(index)}>Update</button>
                                                <button className="btn btn-danger" onClick={() => handleDelete(index)}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            :
                                <tr>
                                    <td colSpan={10}><h1 className="text-center">Users Record not found</h1></td>
                                </tr>
                        }
                    </tbody>
                </table>
            </div>
        </div>
        
    </>)
}