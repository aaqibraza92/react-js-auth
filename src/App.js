
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
import Header from './component/Header';

function App() {
  return (
    <BrowserRouter>
  
       <AuthProvider>
       <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          <Route element={<PrivateRoute />}>
            <Route path="/my-account" element={<MyAccount />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
    </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
