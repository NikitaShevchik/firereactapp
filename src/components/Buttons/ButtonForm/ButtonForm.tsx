import { ButtonProps } from '../../../types/types';
import './ButtonForm.scss';

const ButtonForm = ({ text }: ButtonProps) => (
  <button type='submit' className='button'>
    {text}
  </button>
);

export default ButtonForm;
