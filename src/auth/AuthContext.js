import { createContext, useContext, useState } from "react";


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(sessionStorage.getItem('token' || null))

    const login = (newToken) => {
        sessionStorage.setItem("token", newToken)
        setToken(newToken);
    }

    const logout=()=>{
        sessionStorage.removeItem("token")
        setToken(null);
    }

    return(
        <AuthProvider.Provider value={{token,login,logout}}>

        </AuthProvider.Provider>
    )
} 

export const useAuth=()=>useContext(AuthContext)