import { useState } from 'react';
import { Navigate, useLocation } from 'react-router';
import { Outlet } from 'react-router-dom';
import { BlackSquare } from '../../components/BlackSquare/BlackSquare';
import { transformLeft, transformRight } from '../../consts';
import { userInfo } from '../../redux/reducers/userReducer';

export const Home = () => {
  const [email, setEmail] = useState(userInfo.getState().email);
  const location = useLocation();
  let transform = transformLeft;

  function emailSub() {
    setEmail(userInfo.getState().email);
  }
  userInfo.subscribe(emailSub);

  switch (location.pathname) {
    case '/login':
      transform = transformLeft;
      break
    case '/signup':
      transform = transformRight;
      break
    case '/':
      transform = transformRight;
      break
  }

  return email ? (
    <Navigate to='/main' />
  ) : (
    <div>
      <BlackSquare
        transform={transform}
        width={location.pathname === '/' ? 100 : 60}
      />
      <Outlet />
    </div>
  );
};
