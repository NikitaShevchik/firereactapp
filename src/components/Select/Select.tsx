import { SelectProps } from '../../types/types';
import './Select.scss';

export const Select = ({ array, placeholder, register, name }: SelectProps<string>) => {
  return (
    <select {...register(name)} className='select'>
      <option value={placeholder} disabled className='select__option'>
        {placeholder}
      </option>
      {array.map((month) => {
        return (
          <option key={month} value={month} className='select__option'>
            {month}
          </option>
        );
      })}
    </select>
  );
};
