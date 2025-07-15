    import { useState, useEffect } from "react";

    export default function Table_API_UI({products, handlePreviousPage, handleNextPage}){
        const {page, per_page, total, total_pages, data} = products


        return(<div>
            <h1>Table API UI</h1>

            <div className="table-wrapper">
                <table border={1}>
                    <caption>User Data</caption>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Email</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (data && data.length !== 0) ?
                                data.map((product)=> {
                                    const {id, email, first_name, last_name, avatar} = product;

                                    return(<tr key={id}>
                                        <td>{id}</td>
                                        <td>{email}</td>
                                        <td>{first_name}</td>
                                        <td>{last_name}</td>
                                        <td><img src={avatar} alt="" width={'50px'} height={'50px'} /></td>
                                    </tr>)
                                })
                            :
                            <tr>
                                <td colSpan={10}>Products are not available</td>
                            </tr>
                        }
                    </tbody>
                    <tfoot>
                        <tr style={{border:'none'}}>
                            <td colSpan={10} style={{textAlign:'center'}}>
                                <button onClick={handlePreviousPage}>Prev</button> &nbsp;
                                <button onClick={handleNextPage}>Next</button>
                                {page}
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>)
    }