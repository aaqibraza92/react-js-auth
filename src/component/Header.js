import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../auth/AuthContext";

const Header = () => {
    const { logout,isLogin } = useAuth();
    return (<header>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                {
                    !isLogin &&   <li>
                    <Link to="/login">Login</Link>
                </li>
                }
              {
                 isLogin &&   <li>
                 <Link to="/my-account">My  account</Link>
             </li>
              }
              
                {
                     isLogin &&  <li>
                     <button onClick={logout}>Logout</button>
                 </li>
                }
               
            </ul>
        </nav>
    </header>)
}
export default Header