import React, { useState } from 'react';
import { Navigate, useLocation } from 'react-router';
import { Outlet } from 'react-router-dom';
import BlackSquare from '../../components/BlackSquare/BlackSquare';
import { userInfo } from '../../redux/reducers/userReducer';

const Home = () => {
  const [email, setEmail] = useState(userInfo.getState().email);
  const location = useLocation();

  function emailSub() {
    setEmail(userInfo.getState().email);
  }
  userInfo.subscribe(emailSub);
  const transformLeft = 66.6;
  const transformRight = 0;

  return email ? (
    <Navigate to='/main' />
  ) : (
    <div>
      <BlackSquare
        transform={
          location.pathname === '/login'
            ? transformLeft
            : transformRight || location.pathname === '/signup'
            ? transformRight
            : transformLeft || location.pathname === '/'
            ? transformRight
            : transformLeft
        }
        width={location.pathname === '/' ? 100 : 60}
      />
      <Outlet />
    </div>
  );
};

export default Home;
