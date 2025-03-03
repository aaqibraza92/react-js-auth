
import './App.css';
import SearchDebounce from './pages/SearchDebounce';
import RangeSlider from './pages/RangeSlider';
import Home from './pages/Home';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { AuthProvider } from './auth/AuthContext';
import Login from './pages/private/Login';
import MyAccount from './pages/private/MyAccount';
import NotFound from './pages/NotFound';
import PrivateRoute from './auth/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
       <AuthProvider>
      {/* <Router> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          <Route element={<PrivateRoute />}>
            <Route path="/my-account" element={<MyAccount />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      {/* </Router> */}
    </AuthProvider>
      {/* <AuthProvider>
   
        
       

        

      </AuthProvider> */}
      {/* example with rabne slider */}


    </BrowserRouter>
  );
}

export default App;
