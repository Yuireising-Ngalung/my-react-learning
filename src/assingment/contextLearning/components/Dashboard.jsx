import { useContext, useState } from "react"
import { ContextAPI } from "../ContextAPI"

export default function Dashboard(){

    
    const {email,password,setEmail, setPassword,logout} = useContext(ContextAPI)
    const [updateEmail, setUpdateEmail] = useState(email);
    const [updatePassword, setUpdatePassword] = useState(password);
    const [updateSuccess, setUpdateSuccess] = useState('');
    const [updateError, setUpdateError] = useState('');

    

    {
        if(!email && !password){
            return <h4 className="text-center text-danger mt-3">Please enter Credentials to see Dashboard</h4>
        }
        else{
            console.log("Email to be update: ", updateEmail)
            console.log("Password to be update:", updatePassword)
        }
    }

    const handleEditProfile = () => {
        document.getElementById('editProfile').style.display = 'block';
    }

    const handleUpdate = () =>{
        setEmail(updateEmail)
        setPassword(updatePassword)
        setUpdateSuccess("Updated Successful")
        console.log('Updated Successful')
    }

    const handeReset = () => {
        setUpdateEmail(email)
        setUpdatePassword(password)
        console.log("Reset button click")
    }

    return(<div className="my-5">
        <h2 className="text-center">Welcome Back, {email}</h2>
        <div className="d-flex justify-content-center align-items-center gap-3">
            <button className="btn btn-warning" onClick={logout}>Logout</button>
            {/* <button className="btn btn-success" onClick={handleEditProfile}>Edit Profile</button> */}
        </div>   

        <div id="editProfile" className="py-3 my-5 py-5 bg-light" style={{display:'none'}}>
            <div className="editProfileFormContainer bg-white shadow p-5 rounded" style={{width:'min(95%, 500px)', margin:'0 auto'}}>
                <h2 className="text-center">Update form</h2>
                    <form action="" onSubmit={(event) => event.preventDefault()}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input 
                            className="form-control" 
                            type="email" 
                            name="email" 
                            id="email"
                            placeholder="enter email"
                            value={email}
                            onChange={(event) => setUpdateEmail(event.target.value)}
                            required  
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input 
                            className="form-control" 
                            type="text" 
                            name="password" 
                            id="password"
                            value={password}
                            placeholder="enter password"
                            required 
                            onChange={(event) => setUpdatePassword(event.target.value)}
                        />
                    </div>

                    <div className="d-flex gap-3 mt-3">
                        <button type="submit" className="btn btn-primary" onClick={handleUpdate}>Update</button>
                        {/* <button type="reset" className="btn btn-danger" onClick={handeReset}>Cancel</button> */}
                    </div>
                </form>
            </div> 
        </div>
    </div>)
}