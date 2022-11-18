import React, { useState } from 'react'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { useForm } from 'react-hook-form'
import { AiOutlineLock, AiOutlineMail, AiOutlineUser } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { app } from '../../../../firebase'
import { userInfo } from '../../../../redux/reducers/userReducer.tsx'
import { isValidDay, isValidEmail, isValidFullName, isValidPassword, isValidYear, mainValidator } from '../../../../validation'
import ButtonForm from '../../../UI/Buttons/ButtonForm/ButtonForm'
import ButtonFormDisabled from '../../../UI/Buttons/ButtonForm/ButtonFormDisabled/ButtonFormDisabled'
import FormError from '../../../UI/FormError/FormError'
import Input from '../../../UI/Input/SignUp/Input'
import Select from '../../../UI/Select/Select'
import '../Forms.scss'

const monthsArray = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

const SignUpForm = () => {
    const auth = getAuth(app);
    const navigate = useNavigate()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [errorCodeFirebase, setErrorCodeFirebase] = useState('')

    const wFullName = watch("FullName")
    const wEmail = watch("Email")
    const wPassword = watch("Password")
    const wBirthDay = watch("BirthDay")
    const wBirthMonth = watch("BirthMonth")
    const wBirthYear = watch("BirthYear")

    async function signUp() {
        try {
            await createUserWithEmailAndPassword(auth, wEmail, wPassword)
                .then(({ user }) => {
                    userInfo.dispatch({
                        type: 'ADD_USER',
                        payload: {
                            email: user.email,
                            token: user.accessToken,
                            id: user.uid,
                            fullName: wFullName,
                            birthMonth: wBirthMonth,
                            birthDay: Number(wBirthDay),
                            birthYear: Number(wBirthYear)
                        }
                    })
                }).then(() => alert('Успешная регистрация!')).then(() => navigate('/main'))
        } catch (error) {
            const errorCode = error.code;
            setErrorCodeFirebase(errorCode)
        };
    }
    return (
        <div className="form">
            <form className="form__inputs" onSubmit={handleSubmit((data) => console.log(data))}>
                <Input watch={watch} valid={isValidFullName} reg={register} name={"FullName"} type={"text"} icon={<AiOutlineUser />} placeholder="Full Name" />
                <Input watch={watch} valid={isValidEmail} reg={register} name={"Email"} type={"text"} icon={<AiOutlineMail />} placeholder="Email Address" />
                {errorCodeFirebase === 'auth/email-already-in-use' && <FormError text={"Email is already registered"} />}
                <Input watch={watch} valid={isValidPassword} reg={register} name={"Password"} type={"password"} icon={<AiOutlineLock />} placeholder="Password" />
                <div className="form__subtext">Date of birth:</div>
                <div className="form__date">
                    <Select reg={register} name={"BirthMonth"} placeholder={"Month"} array={monthsArray} />
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
    )
}

export default SignUpForm