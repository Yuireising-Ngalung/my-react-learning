import { useState } from "react";

export default function UseEffectUI({users, handleUpdate, handleDelete, handleAddNewUser, handleNewUserSubmit, handleNewUserOnchange}){

    return(<>
        <div className="container p-md-5 p-2 py-4 mt-5 border-top border-success border-5 rounded shadow">
            <h1>UseEffect | <span className="text-success">Fetch User Data from API</span></h1>
            <hr />
            <button 
                className="btn btn-success mb-2" 
                onClick={handleAddNewUser}
            >
                Add New User
            </button>

            <div className="shadow my-3 p-md-5 p-2 rounded" id="newUserForm" style={{display:'none'}}>
                <form action="" onSubmit={handleNewUserSubmit}>
                    <h2>New User</h2>
                    <div className="form-group">
                        <label htmlFor="id" className="fw-bold">User ID</label>
                        <input 
                            type="number" 
                            name="id" 
                            id="id" 
                            placeholder="please enter user id" 
                            className="form-control" 
                            onChange={handleNewUserOnchange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="firstName" className="fw-bold">First Name</label>
                        <input 
                            type="text" 
                            name="first_name" 
                            id="firstName" 
                            placeholder="please enter first name" 
                            className="form-control"
                            onChange={handleNewUserOnchange} 
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="lastName" className="fw-bold">Last Name</label>
                        <input 
                            type="text" 
                            name="last_name" 
                            id="lastName" 
                            placeholder="please enter last name" 
                            className="form-control"
                            onChange={handleNewUserOnchange} 
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email" className="fw-bold">Email ID</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            placeholder="please enter email id" 
                            className="form-control" 
                            onChange={handleNewUserOnchange}
                        />
                    </div>

                    <div className="mt-2">
                        <button className="btn btn-success">Add</button>
                    </div>
                </form>
            </div>
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
                                                <button className="btn btn-warning" onClick={() => handleUpdate(index)}>Update</button>
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