import { FormOffer } from '../../components/FormOffer/FormOffer';
import { SignInForm } from '../../components/Forms/SignInForm/SignInForm';
import { FormTitleSubtitle } from '../../components/FormTitleSubtitle/FormTitleSubtitle';
import { Plug } from '../../components/Plug/Plug';
import './LogIn.scss';

export const LogIn = () => {
  return (
    <div className='login'>
      <div className='login__wrapper'>
        <div className='login__content'>
          <div className='login__form form'>
            <div className='form__body'>
              <div className='form__content'>
                <FormTitleSubtitle title={'Welcome Back!'} subtitle={'Log In to Your Account'} />
                <SignInForm />
                <FormOffer text={'Don\'t have an account?'} linkText={'Sign Up'} path={'/signup'} />
              </div>
            </div>
          </div>
          <Plug width={60} />
        </div>
      </div>
    </div>
  );
};