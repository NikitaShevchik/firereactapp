import { toast } from 'react-toastify';
import { ButtonProps } from '../../../../types/types';
import '../ButtonForm.scss';

const ButtonFormDisabled = ({ text }: ButtonProps) => (
  <button
    type='button'
    onClick={() => toast.error('Incorrectly Completed Form', { position: 'top-right' })}
    className='button _disabled'
  >
    {text}
  </button>
);

export default ButtonFormDisabled;
