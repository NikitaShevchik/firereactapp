import { ButtonProps } from '../../../../types/types';
import './ButtonForm.scss';

const ButtonFormDisabled = ({ text }: ButtonProps) => (<button disabled type='submit' className="button _disabled" >{text}</button>)

export default ButtonFormDisabled;