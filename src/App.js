import { Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import './App.scss';

function App() {
  return (
    <div className="App class">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LogIn />} />
      </Routes>
    </div>
  );
}

export default App;
