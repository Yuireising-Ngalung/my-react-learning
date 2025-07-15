import Product_List_Card from "./Product_List_Card";
import Context_Provider from './Context_Provider';
import Login from './components/Login';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import Dashboard from './components/Dashboard';

export default function IndexPage(){
    return(
        <Context_Provider>
            <BrowserRouter>
                <nav className="bg-light shadow d-flex p-3 gap-3 mb-5 justify-content-between align-items-center">
                    <div className="d-flex gap-3">
                        <Link to='/'>Home</Link>
                        <Link to='/login'>Login</Link>
                    </div>
                    
                    {/* <div>
                        <label>
                            <input type="checkbox"/>
                            use dark Mode
                        </label>
                    </div> */}
                </nav>
                <Routes>
                    <Route path="/" element={<Product_List_Card />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    }/>
                </Routes>
            </BrowserRouter>
        </Context_Provider>
    )
}