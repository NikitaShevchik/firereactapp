import React from 'react'
import Input from '../../components/UI/Input/Input'
import { AiOutlineMail, AiOutlineUser, AiOutlineLock } from 'react-icons/ai'
import './SignUp.scss'
import ButtonForm from '../../components/UI/Buttons/ButtonForm/ButtonForm'
import BlackSquare from '../../components/UI/BlackSquare/BlackSquare'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const navigate = useNavigate()
    return (
        <div className="signup">
            <div className="signup__wrapper">
                <div className="signup__content">
                    <div className="signup__logo">
                    </div>
                    <div className="signup__form form">
                        <div className="form__body">
                            <div className="form__content">
                                <div className="form__text">
                                    <div className="form__title">
                                        Hello!
                                    </div>
                                    <div className="form__subtitle">
                                        Sign Up to Get Started
                                    </div>
                                </div>
                                <div className="form__registration">
                                    <div className="form__inputs">
                                        <Input type={"text"} icon={<AiOutlineUser />} placeholder="Full Name" />
                                        <Input type={"text"} icon={<AiOutlineMail />} placeholder="Email Address" />
                                        <Input type={"password"} icon={<AiOutlineLock />} placeholder="Password" />
                                    </div>
                                    <ButtonForm text={"Register"} />
                                </div>
                                <div className="form__login">
                                    Already Have Account? <a onClick={() => navigate('/login')}>Log In</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp