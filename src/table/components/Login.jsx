import { useContext, useState } from "react"
import { Context } from "../context/Context"
import { useNavigate } from "react-router-dom";


export default function Login(){

    const {login} = useContext(Context);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        
        login(email, password);
        
        navigate('/dashboard');
    }


    return(<>
        <div className="container my-5 py-5 d-flex justify-content-center align-items-center ">
            <div className="formContainer p-5 shadow rounded" style={{width:'min(95%,500px)'}}>
                <h1 className="text-center">Login</h1>
                <form action="" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email" className="fw-bold">Email</label>
                        <input
                            type="email" 
                            id="email"
                            name="email"  
                            className="form-control"
                            placeholder="enter your email id"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password" className="fw-bold">Password</label>
                        <input
                            type="password" 
                            id="password"
                            name="password"  
                            className="form-control"
                            placeholder="enter your password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary mt-3">Login</button>
                </form>
            </div>

        </div>
    </>)
}