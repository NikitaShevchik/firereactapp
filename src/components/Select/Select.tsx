import React from 'react';
import { SelectProps } from '../../types/types';
import './Select.scss';

const Select = ({ array, placeholder, reg, name }: SelectProps<string>) => {
  return (
    <select {...reg(name)} className='select'>
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

export default Select;
