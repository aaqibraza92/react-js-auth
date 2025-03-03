import { Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext"

const PrivateRoute =()=>{
    const {token}=useAuth();

    return(
        token ? <Outlet/> : <Navigate to="/404" />
    )
}

export default PrivateRoute;