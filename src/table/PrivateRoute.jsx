import { Children, useContext } from "react";
import { Context } from "./context/Context";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({children}){
    const {userData} = useContext(Context)

    return userData ? children : <Navigate to='/login' />
}