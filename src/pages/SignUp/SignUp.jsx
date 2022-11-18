import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { userInfo } from '../../redux/reducers/userReducer.tsx';
import FormOffer from '../../components/UI/FormOffer/FormOffer';
import FormTitleSubtitle from '../../components/UI/FormTitleSubtitle/FormTitleSubtitle';
import Plug from '../../components/UI/Plug/Plug';
import SignUpForm from '../../components/elements/Forms/SignUpForm/SignUpForm';
import './SignUp.scss'




const SignUp = () => {
    const navigate = useNavigate();

    const [userEmail, setUserEmail] = useState(userInfo.getState().email)
    userInfo.subscribe(userChanged)
    function userChanged() {
        setUserEmail(userInfo.getState().email)
        console.log(userEmail)
    }

    return (
        <div className="signup">
            <div className="signup__wrapper">
                <div className="signup__content">
                    <Plug wdth={60} />
                    <div className="signup__form form">
                        <div className="form__body">
                            <div className="form__content">
                                <FormTitleSubtitle title={"Hello!"} subtitle={"Sign Up to Get Started"} />
                                <SignUpForm />
                                <FormOffer text={"Already Have Account?"} linkText={"Log In"} cb={() => navigate('/login')} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp