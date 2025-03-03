import { createContext, useContext, useState } from "react";


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(sessionStorage.getItem('token') || null);

    const [isLogin,setIsLogin]=useState(sessionStorage.getItem('token') ? true : false)

    const login = (newToken) => {
        sessionStorage.setItem("token", newToken)
        setToken(newToken);
        setIsLogin(true)
    }

    const logout = () => {
        sessionStorage.removeItem("token")
        setToken(null);
        setIsLogin(false)
    }

    return (
        <AuthContext.Provider value={{ token, login, logout,isLogin }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)