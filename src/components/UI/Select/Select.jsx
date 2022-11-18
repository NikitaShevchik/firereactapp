import React from 'react'
import './Select.scss'

const Select = ({ array, placeholder, reg, name }) => {
    return (
        <select {...reg(name)} className="select">
            <option value={placeholder} disabled className="select__option">{placeholder}</option>
            {array.map(month => {
                return <option key={month} value={month} className="select__option">{month}</option>
            })}
        </select>
    )
}

export default Select