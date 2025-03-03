import logo from './logo.svg';
import './App.css';
import Home from './pages/RangeSlider';
import SearchDebounce from './pages/SearchDebounce';

function App() {
  return (
    <div className="App">
      {/* example with rabne slider */}
      <Home/>

      <SearchDebounce/>
    </div>
  );
}

export default App;
