import React from 'react'
import { useState } from 'react'
import '../Input.scss'

const Input = ({ watch, icon, placeholder, type, maxLength, reg, name, valid }) => {
    const [active, setActive] = useState(false);
    const [isValid, setIsValid] = useState(null);
    const [borderColor, setBorderColor] = useState('transparent');
    const value = watch(name);

    function borderColors() {
        setActive(false);
        setIsValid(valid(value));
        if (!isValid) {
            setBorderColor('rgb(250, 50, 50)')
        }
    }

    return (
        <div className="input" style={{ borderColor: `${active ? 'black' : isValid ? 'rgb(50, 200, 50)' : borderColor}` }} >
            <div className="input__content">
                <div className="input__icon">
                    {icon}
                </div>
                <input type={type} {...reg(name)} onFocus={() => setActive(true)} onBlur={() => borderColors()} maxLength={maxLength} placeholder={placeholder} className="input__item" />
            </div>
        </div >
    )
}

export default Input;