import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BlackSquareProps } from '../../types/types';
import { Button } from '../Buttons/Button';
import './BlackSquare.scss';

export const BlackSquare = ({ transform, width }: BlackSquareProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const transformation = {
    transform: `translate(${transform}%, 0)`,
    width: `${width}%`,
  };
  return (
    <div className='logo' style={transformation}>
      <span>
        Build Simple React App With
        <Link className='logo__link' to={'/login'}>
          {' '}Sign In
        </Link>
        /
        <Link className='logo__link' to={'/signup'}>
          Sign Up
        </Link>
        /
        <Link className='logo__link' to={'/'}>
          Logout{' '}
        </Link>
        functionality
      </span>
      {location.pathname === '/' && (
        <div className='logo__buttons'>
          <Button text={'Log In'} className={'_welcome'} callback={() => navigate('/login')} />
          <Button text={'Sign Up'} className={'_welcome'} callback={() => navigate('/signup')} />
        </div>
      )}
    </div>
  );
};