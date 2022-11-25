import { BiError } from 'react-icons/bi';
import './FormError.scss';

export const FormError = ({ text }: { text: string }) => {
  return (
    <div className='error'>
      <div className='error__icon'>
        <BiError />
      </div>
      <div className='error__text'>{text}</div>
    </div>
  );
};