import React from 'react'
import { AiOutlineLock, AiOutlineMail, AiOutlineUser } from 'react-icons/ai'
import { Outlet, useNavigate } from 'react-router-dom'
import BlackSquare from '../../components/UI/BlackSquare/BlackSquare'
import ButtonForm from '../../components/UI/Buttons/ButtonForm/ButtonForm'
import Input from '../../components/UI/Input/Input'
import './LogIn.scss'

const LogIn = () => {
    const navigate = useNavigate()
    return (
        <div className="login">
            <div className="login__wrapper">
                <div className="login__content">
                    <div className="login__form form">
                        <div className="form__body">
                            <div className="form__content">
                                <div className="form__text">
                                    <div className="form__title">
                                        Welcome Back!
                                    </div>
                                    <div className="form__subtitle">
                                        Log In to Your Account
                                    </div>
                                </div>
                                <div className="form__registration">
                                    <div className="form__inputs">
                                        <Input type={"text"} icon={<AiOutlineMail />} placeholder="Email Address" />
                                        <Input type={"password"} icon={<AiOutlineLock />} placeholder="Password" />
                                    </div>
                                    <ButtonForm text={"Log In"} />
                                    {/* <ButtonForm text={"Log In(temporary)"} cb={() => navigate('/login')} />
                                    <ButtonForm text={"Home(temporary)"} cb={() => navigate('/')} /> */}
                                </div>
                                <div className="form__signup">
                                    Don't have an account? <a onClick={() => navigate('/signup')}>Sign Up</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="login__logo">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogIn