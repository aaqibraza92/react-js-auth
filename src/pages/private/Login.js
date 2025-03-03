import {  useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/AuthContext";

const Login=()=>{

    const {login}=useAuth()
    const navigate = useNavigate();
    const handleLogin =()=>{
        login("asidfo12812093")
        navigate("/my-account");
    }
    return(
        <>
          <h2>
       Login Page
        </h2>

        <button onClick={handleLogin }>Login</button>
        </>
      
    )
    }
    
    export default Login;