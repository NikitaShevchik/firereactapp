import { ButtonProps } from '../../../types/types';
import './ButtonsWelcome.scss';

const ButtonsWelcome = ({ text, cb }: ButtonProps) => {
  return (
    <button className='welcomebutton' onClick={cb}>
      {text}
    </button>
  );
};

export default ButtonsWelcome;
