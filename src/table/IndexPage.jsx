import ProductListCard from "./ProductListCard";
import ContextProvider from './ContextProvider';
import Login from './components/Login';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import Dashboard from './components/Dashboard';

export default function IndexPage(){
    return(
        <ContextProvider>
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
                    <Route path="/" element={<ProductListCard />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    }/>
                </Routes>
            </BrowserRouter>
        </ContextProvider>
    )
}