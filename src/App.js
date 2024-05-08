import './App.css';
import Navbar from './components/Navbar/navbar';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home/home';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
