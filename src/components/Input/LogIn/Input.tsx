import { InputLogInProps } from '../../../types/types';
import '../Input.scss';

export const Input = ({
  icon,
  placeholder,
  type,
  maxLength,
  state,
  setState,
}: InputLogInProps<string>) => {
  return (
    <div className='input'>
      <div className='input__content'>
        <div className='input__icon'>{icon}</div>
        <input
          required={true}
          type={type}
          maxLength={maxLength}
          value={state}
          onChange={(e) => setState(e.target.value)}
          placeholder={placeholder}
          className='input__item'
        />
      </div>
    </div>
  );
};
