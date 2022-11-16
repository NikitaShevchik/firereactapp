import React, { useState } from 'react'
import Input from '../../components/UI/Input/Input'
import { AiOutlineMail, AiOutlineUser, AiOutlineLock } from 'react-icons/ai'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import ButtonForm from '../../components/UI/Buttons/ButtonForm/ButtonForm'
import BlackSquare from '../../components/UI/BlackSquare/BlackSquare'
import { useNavigate } from 'react-router-dom'
import './SignUp.scss'
import { app } from '../../firebase';

const SignUp = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = getAuth(app);

    function signUp() {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
            });
    }


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
                                        <Input type={"text"} icon={<AiOutlineMail />} placeholder="Email Address" state={email} setState={setEmail} />
                                        <Input type={"password"} icon={<AiOutlineLock />} placeholder="Password" state={password} setState={setPassword} />
                                    </div>
                                    <ButtonForm text={"Register"} cb={() => signUp()} />
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