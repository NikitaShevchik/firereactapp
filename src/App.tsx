import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import LogIn from './pages/LogIn/LogIn';
import SignUp from './pages/SignUp/SignUp';
import './firebase';
import Main from './pages/Main/Main';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='App'>
      <div>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path='login' element={<LogIn />} />
            <Route path='signup' element={<SignUp />} />
          </Route>
          <Route path='/main' element={<Main />} />
        </Routes>
      </div>
      <ToastContainer
        position={'top-center'}
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
    </div>
  );
}

export default App;
