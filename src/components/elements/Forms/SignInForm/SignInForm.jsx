import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { AiOutlineLock, AiOutlineMail } from 'react-icons/ai'
import ButtonForm from '../../../UI/Buttons/ButtonForm/ButtonForm'
import Input from '../../../UI/Input/LogIn/Input'
import { app } from '../../../../firebase'
import { userInfo } from '../../../../redux/reducers/userReducer.tsx'
import FormError from '../../../UI/FormError/FormError'
import '../Forms.scss'

const SignInForm = () => {
    const [errorCodeFirebase, setErrorCodeFirebase] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const auth = getAuth(app)

    async function login() {
        try {
            await signInWithEmailAndPassword(auth, email, password)
                .then(({ user }) => {
                    userInfo.dispatch({
                        type: 'ADD_USER',
                        payload: {
                            email: user.email,
                            token: user.accessToken,
                            id: user.uid
                        }
                    })
                }).then(() => console.log(userInfo.getState())).then(() => alert('Успешный вход в систему'))
        } catch (error) {
            const errorCode = error.code;
            console.log(errorCode)
            setErrorCodeFirebase(errorCode)
            // const errorMessage = error.message;
        };
    }

    return (
        <div className="form" >
            <div className="form__inputs">
                <Input type={"text"} icon={<AiOutlineMail />} placeholder="Email Address" state={email} setState={setEmail} />
                <Input type={"password"} icon={<AiOutlineLock />} placeholder="Password" state={password} setState={setPassword} />
                {errorCodeFirebase === 'auth/user-not-found' && <FormError text={'User/Email is not found'} />}
                {errorCodeFirebase === 'auth/wrong-password' && <FormError text={'Wrong password'} />}
                {errorCodeFirebase === 'auth/invalid-email' && <FormError text={'Invalid email'} />}
                <ButtonForm text={"Log In"} cb={() => login()} />
            </div>
        </div>
    )
}

export default SignInForm;