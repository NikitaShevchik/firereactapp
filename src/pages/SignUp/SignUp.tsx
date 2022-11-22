import FormOffer from '../../components/FormOffer/FormOffer';
import FormTitleSubtitle from '../../components/FormTitleSubtitle/FormTitleSubtitle';
import Plug from '../../components/Plug/Plug';
import SignUpForm from '../../components/Forms/SignUpForm/SignUpForm';
import './SignUp.scss';

const SignUp = () => {
  return (
    <div className='signup'>
      <div className='signup__wrapper'>
        <div className='signup__content'>
          <Plug wdth={60} />
          <div className='signup__form form'>
            <div className='form__body'>
              <div className='form__content'>
                <FormTitleSubtitle title={'Hello!'} subtitle={'Sign Up to Get Started'} />
                <SignUpForm />
                <FormOffer text={'Already Have Account?'} linkText={'Log In'} path={'/login'} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
