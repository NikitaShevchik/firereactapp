import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from 'react'
import { AiOutlineLock, AiOutlineMail, AiOutlineUser } from 'react-icons/ai'
import { Outlet, useNavigate } from 'react-router-dom'
import BlackSquare from '../../components/UI/BlackSquare/BlackSquare'
import ButtonForm from '../../components/UI/Buttons/ButtonForm/ButtonForm'
import Input from '../../components/UI/Input/Input'
import { app } from '../../firebase'
import './LogIn.scss'

const LogIn = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const auth = getAuth(app)

    function login() {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
                console.log(errorCode)
            });
    }

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
                                        <Input type={"text"} icon={<AiOutlineMail />} placeholder="Email Address" state={email} setState={setEmail} />
                                        <Input type={"password"} icon={<AiOutlineLock />} placeholder="Password" state={password} setState={setPassword} />
                                    </div>
                                    <ButtonForm text={"Log In"} cb={() => login()} />
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