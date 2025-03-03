import logo from './logo.svg';
import './App.css';
import SearchDebounce from './pages/SearchDebounce';
import RangeSlider from './pages/RangeSlider';
import Home from './pages/Home';
import { ThemeProvider } from './auth/ThemeContext';

function App() {
  return (
    <div className="App">
       <ThemeProvider>
       <Home/>
      <RangeSlider/>

      <SearchDebounce/>

       </ThemeProvider>
      {/* example with rabne slider */}

     
    </div>
  );
}

export default App;
