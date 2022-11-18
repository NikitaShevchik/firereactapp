import React from 'react'
import { useNavigate } from 'react-router-dom';
import SignInForm from '../../components/elements/Forms/SignInForm/SignInForm';
import FormOffer from "../../components/UI/FormOffer/FormOffer";
import FormTitleSubtitle from "../../components/UI/FormTitleSubtitle/FormTitleSubtitle";
import Plug from "../../components/UI/Plug/Plug";
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
                                <FormTitleSubtitle title={"Welcome Back!"} subtitle={"Log In to Your Account"} />
                                <SignInForm />
                                <FormOffer text={"Don't have an account?"} linkText={"Sign Up"} cb={() => navigate('/signup')} />
                            </div>
                        </div>
                    </div>
                    <Plug wdth={60} />
                </div>
            </div>
        </div>
    )
}

export default LogIn