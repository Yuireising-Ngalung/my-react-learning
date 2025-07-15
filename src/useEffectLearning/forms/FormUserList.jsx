export default function FormUserList({userList}){

    return(<div>
        <div className="table-wrapper">
            <table border={1}>
                <thead>
                    <tr>
                        <th>SI.no</th>
                        <th>Username</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {
                        (userList && userList.length !== 0) ?
                            userList.map((user,index)=>{
                                const {username, password} = user;
                                return <tr key={index + 1}>
                                    <td>{index + 1 }</td>
                                    <td>{username}</td>
                                    <td>{password}</td>
                                </tr>
                            })
                        :
                        <tr>
                            <td colSpan={10}>Record not Available</td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    </div>)
}