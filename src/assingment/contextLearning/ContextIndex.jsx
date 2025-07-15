import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import ContextProvider from "./ContextProvider";

export default function ContextIndex(){
    return(<div>
        <ContextProvider>
            <Login />
            <Dashboard />
        </ContextProvider>
    </div>)
}