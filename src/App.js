import { Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home/Home';
import LogIn from './pages/LogIn/LogIn';
import Header from './components/elements/header/Header';
import Footer from './components/elements/footer/Footer';
import SignUp from './pages/SignUp/SignUp';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div>
        {/* <Header /> */}
        <Routes>
          <Route path='/' element={<Home />} >
            <Route path='login' element={<LogIn />} />
            <Route path='signup' element={<SignUp />} />
          </Route>
        </Routes>
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
