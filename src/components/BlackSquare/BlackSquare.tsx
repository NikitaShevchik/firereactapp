import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BlackSquareProps } from '../../types/types';
import ButtonsWelcome from '../Buttons/ButtonsWelcome/ButtonsWelcome';
import './BlackSquare.scss';

const BlackSquare = ({ transform, width }: BlackSquareProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const trans = {
    transform: `translate(${transform}%, 0)`,
    width: `${width}%`,
  };
  return (
    <div className='logo' style={trans}>
      <span>
        Build Simple React App With
        <Link className='logo__link' to={'/login'}>
          {' '}
          Sign In
        </Link>{' '}
        /
        <Link className='logo__link' to={'/signup'}>
          {' '}
          Sign Up
        </Link>{' '}
        /
        <Link className='logo__link' to={'/'}>
          {' '}
          Logout
        </Link>{' '}
        functionality
      </span>
      {location.pathname === '/' && (
        <div className='logo__buttons'>
          <ButtonsWelcome text={'Log In'} cb={() => navigate('/login')} />
          <ButtonsWelcome text={'Sign Up'} cb={() => navigate('/signup')} />
        </div>
      )}
    </div>
  );
};

export default BlackSquare;
