import { ButtonProps } from '../../types/types';
import './Button.scss'

export const Button = ({ text, callback, className, type }: ButtonProps) => (
    <button type={type} className={`button ${className}`} onClick={callback}>
        {text}
    </button>
);