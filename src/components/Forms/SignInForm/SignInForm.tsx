import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { AiOutlineLock, AiOutlineMail } from 'react-icons/ai';
import Input from '../../Input/LogIn/Input';
import { app } from '../../../firebase';
import { userInfo } from '../../../redux/reducers/userReducer';
import { useNavigate } from 'react-router-dom';
import useErrorInput from '../../../hooks/useErrorInput';
import ButtonForm from '../../Buttons/ButtonForm/ButtonFormDisabled/ButtonForm';
import '../Forms.scss';

const SignInForm = () => {
  const navigate = useNavigate();
  const [errorCodeFirebase, setErrorCodeFirebase] = useState('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const auth = getAuth(app);
  const errorMessage = useErrorInput(errorCodeFirebase);

  async function login(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      const token = await user.getIdToken();
      userInfo.dispatch({
        type: 'ADD_USER',
        payload: {
          email: user.email,
          token,
          id: user.uid,
        },
      });
      navigate('/main');
    } catch (error: unknown) {
      if (error instanceof Error) {
        setErrorCodeFirebase(error.message);
      }
    }
  }
  return (
    <form className='form' onSubmit={login}>
      <div className='form__inputs'>
        <Input
          type={'text'}
          icon={<AiOutlineMail />}
          placeholder='Email Address'
          state={email}
          setState={setEmail}
        />
        <Input
          type={'password'}
          icon={<AiOutlineLock />}
          placeholder='Password'
          state={password}
          setState={setPassword}
        />
        {errorMessage}
        <ButtonForm text={'Log In'} />
      </div>
    </form>
  );
};

export default SignInForm;
