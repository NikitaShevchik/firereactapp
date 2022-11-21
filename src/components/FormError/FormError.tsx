import { BiError } from 'react-icons/bi';
import { FormErrorProps } from '../../types/types';
import './FormError.scss';

const FormError = ({ text }: FormErrorProps) => {
    return (
        <div className="error">
            <div className="error__icon"><BiError /></div>
            <div className="error__text">{text}</div>
        </div>
    )
}

export default FormError;