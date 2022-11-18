import { Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home/Home';
import LogIn from './pages/LogIn/LogIn';
import SignUp from './pages/SignUp/SignUp';
import './firebase'
import Main from './pages/Main/Main';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path='/' element={<Home />} >
            <Route path='login' element={<LogIn />} />
            <Route path='signup' element={<SignUp />} />
          </Route>
          <Route path='/main' element={<Main />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
