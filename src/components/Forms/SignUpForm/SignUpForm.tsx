import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import { AiOutlineLock, AiOutlineMail, AiOutlineUser } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { app } from '../../../firebase';
import { userInfo } from '../../../redux/reducers/userReducer';
import {
  isValidDay,
  isValidEmail,
  isValidFullName,
  isValidPassword,
  isValidYear,
  mainValidator,
} from '../../../validation';
import FormError from '../../FormError/FormError';
import Input from '../../Input/SignUp/Input';
import Select from '../../Select/Select';
import ButtonForm from '../../Buttons/ButtonForm/ButtonFormDisabled/ButtonForm';
import ButtonFormDisabled from '../../Buttons/ButtonForm/ButtonFormDisabled/ButtonFormDisabled';
import '../Forms.scss';

const monthsArray = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const SignUpForm = () => {
  const auth = getAuth(app);
  const navigate = useNavigate();
  const { register, handleSubmit, watch } = useForm();
  const [errorCodeFirebase, setErrorCodeFirebase] = useState('');

  const wFullName = watch('FullName');
  const wEmail = watch('Email');
  const wPassword = watch('Password');
  const wBirthDay = watch('BirthDay');
  const wBirthMonth = watch('BirthMonth');
  const wBirthYear = watch('BirthYear');

  async function signUp() {
    try {
      const { user } = await createUserWithEmailAndPassword(auth, wEmail, wPassword);
      const token = await user.getIdToken();
      userInfo.dispatch({
        type: 'ADD_USER',
        payload: {
          email: user.email,
          token,
          id: user.uid,
          fullName: wFullName,
          birthMonth: wBirthMonth,
          birthDay: Number(wBirthDay),
          birthYear: Number(wBirthYear),
        },
      });
      navigate('/main');
    } catch (error: unknown) {
      if (error instanceof Error) {
        const errorCode = error.message;
        setErrorCodeFirebase(errorCode);
      }
    }
  }
  return (
    <div className='form'>
      <form className='form__inputs' onSubmit={handleSubmit((data) => console.log(data))}>
        <Input
          watch={watch}
          validate={isValidFullName}
          reg={register}
          name={'FullName'}
          type={'text'}
          icon={<AiOutlineUser />}
          placeholder='Full Name'
        />
        <Input
          watch={watch}
          validate={isValidEmail}
          reg={register}
          name={'Email'}
          type={'text'}
          icon={<AiOutlineMail />}
          placeholder='Email Address'
        />
        {errorCodeFirebase === 'auth/email-already-in-use' && (
          <FormError text={'Email is already registered'} />
        )}
        <Input
          watch={watch}
          validate={isValidPassword}
          reg={register}
          name={'Password'}
          type={'password'}
          icon={<AiOutlineLock />}
          placeholder='Password'
        />
        <div className='form__subtext'>Date of birth:</div>
        <div className='form__date'>
          <Select reg={register} name={'BirthMonth'} placeholder={'Month'} array={monthsArray} />
          <Input<number>
            watch={watch}
            validate={isValidDay}
            reg={register}
            name={'BirthDay'}
            type='number'
            maxLength={2}
            placeholder='Day'
          />
          <Input<number>
            watch={watch}
            validate={isValidYear}
            reg={register}
            name={'BirthYear'}
            type='number'
            maxLength={4}
            placeholder='Year'
          />
        </div>
        {mainValidator({ wEmail, wFullName, wPassword, wBirthDay, wBirthYear }) ? (
          <ButtonForm text={'Register'} cb={() => signUp()} />
        ) : (
          <ButtonFormDisabled text={'Register'} />
        )}
      </form>
    </div>
  );
};

export default SignUpForm;
