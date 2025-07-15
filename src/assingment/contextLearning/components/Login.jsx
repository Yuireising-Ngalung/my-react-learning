import { useContext, useState } from "react"
import { ContextAPI } from "../ContextAPI"

export default function Login(){

    const {login, success, errors, setSuccess, setErrors} = useContext(ContextAPI)
    const[userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')

    const handleLogin = () => {
        console.log(userEmail)
        console.log(userPassword)

        login(userEmail, userPassword);
    }


    return(<div>
        <div className="formWrapper d-flex justify-content-center align-items-center">
            <div className="formContainer bg-white p-md-5 p-3 rounded shadow" style={{width: 'min(90%, 500px)'}}>
                {
                    success && 
                    <div className="alert alert-success alert-dismissible fade show" role="alert">
                        <strong>{success}</strong>
                        <button 
                            type="button"
                            className="btn-close"
                            data-bs-dismiss = 'alert'
                            aria-label="close"
                            onClick={() => setSuccess(null)}
                        ></button>
                    </div>
                }

                {
                    errors && 
                    <div className="alert alert-danger alert-dismissible fade show" role="alert">
                        <strong>{errors}</strong>
                        <button 
                            type="button"
                            className="btn-close"
                            data-bs-dismiss = 'alert'
                            aria-label="close"
                            onClick={() => setErrors(null)}
                        ></button>
                    </div>
                }

                
                <h2 className="text-center">Login</h2>
                <form action="" onSubmit={(event) => event.preventDefault()}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input 
                            className="form-control" 
                            type="email" 
                            name="email" 
                            id="email"
                            placeholder="enter email"
                            required 
                            onChange={(event) => setUserEmail(event.target.value)}
                            value={userEmail}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input 
                            className="form-control" 
                            type="password" 
                            name="password" 
                            id="password"
                            placeholder="enter password"
                            required 
                            onChange={(event) => setUserPassword(event.target.value)}
                            value={userPassword}
                        />
                    </div>

                    <div className="d-flex gap-3 mt-3">
                        <button type="submit" className="btn btn-primary" onClick={handleLogin}>Login</button>
                        {/* <button type="reset" className="btn btn-danger">Cancel</button> */}
                    </div>

                    <p><b>Email: </b><em>admin@gmail.com</em> <b>Password: </b><em>Admin@123</em></p>
                </form>
            </div>
            
        </div>
    </div>)
}