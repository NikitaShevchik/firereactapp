import React, { useState } from 'react'
import { AiOutlineMail, AiOutlineUser, AiOutlineLock, AiOutlineCalendar } from 'react-icons/ai'
import { useForm } from 'react-hook-form';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { app } from '../../firebase';
import { useNavigate } from 'react-router-dom'
import ButtonForm from '../../components/UI/Buttons/ButtonForm/ButtonForm'
import BlackSquare from '../../components/UI/BlackSquare/BlackSquare'
import Input from '../../components/UI/Input/SignUp/Input'
import Select from '../../components/UI/Select/Select';
import { isValidDay, isValidEmail, isValidFullName, isValidPassword, isValidYear, mainValidator } from '../../validation.js';
import './SignUp.scss'
import ButtonFormDisabled from '../../components/UI/Buttons/ButtonForm/ButtonFormDisabled/ButtonFormDisabled';


const SignUp = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const auth = getAuth(app);
    const db = getFirestore(app);

    function signUp() {
        createUserWithEmailAndPassword(auth, wEmail, wPassword)
            .then((userCredential) => {
                const user = userCredential.user;
            })
            .then(alert('Успешная регистрация!'))
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
            });
    }

    const monthsArray = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];

    const wFullName = watch("FullName")
    const wEmail = watch("Email")
    const wPassword = watch("Password")
    const wBirthDay = watch("BirthDay")
    const wBirthMonth = watch("Month")
    const wBirthYear = watch("BirthYear")

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
                                    <form className="form__inputs" onSubmit={handleSubmit((data) => console.log(data))}>
                                        <Input watch={watch} valid={isValidFullName} reg={register} name={"FullName"} type={"text"} icon={<AiOutlineUser />} placeholder="Full Name" />
                                        <Input watch={watch} valid={isValidEmail} reg={register} name={"Email"} type={"text"} icon={<AiOutlineMail />} placeholder="Email Address" />
                                        <Input watch={watch} valid={isValidPassword} reg={register} name={"Password"} type={"password"} icon={<AiOutlineLock />} placeholder="Password" />
                                        <div className="form__subtext">Date of birth:</div>
                                        <div className="form__date">
                                            <Select reg={register} name={"BirthMonth"} placeholder={"Month"} array={monthsArray} />
                                            {/* <Input type={"text"} maxLength={2} placeholder="Month" state={birthMonth} setState={setBirthMonth} /> */}
                                            <Input watch={watch} valid={isValidDay} reg={register} name={"BirthDay"} type={"text"} maxLength={2} placeholder="Day" />
                                            <Input watch={watch} valid={isValidYear} reg={register} name={"BirthYear"} type={"text"} maxLength={4} placeholder="Year" />
                                        </div>

                                        {mainValidator(wEmail, wFullName, wPassword, wBirthDay, wBirthYear)
                                            ?
                                            <ButtonForm text={"Register"} cb={() => signUp()} />
                                            :
                                            <ButtonFormDisabled text={"Register"} />
                                        }
                                    </form>
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