import './firebase';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Home } from './pages/Home/Home';
import { SignUp } from './pages/SignUp/SignUp';
import { LogIn } from './pages/LogIn/LogIn';
import { Main } from './pages/Main/Main';

export function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='login' element={<LogIn />} />
          <Route path='signup' element={<SignUp />} />
        </Route>
        <Route path='/main' element={<Main />} />
      </Routes>
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
