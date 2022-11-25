import React from 'react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import { AiOutlineLock, AiOutlineMail, AiOutlineUser } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { app } from '../../../firebase';
import { userInfo } from '../../../redux/reducers/userReducer';
import { Button } from '../../Buttons/Button';
import {
  isValidDay,
  isValidEmail,
  isValidFullName,
  isValidPassword,
  isValidYear,
  mainValidator,
} from '../../../validation';
import { Input } from '../../Input/SignUp/Input';
import { Select } from '../../Select/Select';
import { monthsArray } from '../../../consts';
import '../Forms.scss';

export const SignUpForm = () => {
  const auth = getAuth(app);
  const navigate = useNavigate();
  const { register, watch } = useForm();
  const wFullName = watch('FullName');
  const wEmail = watch('Email');
  const wPassword = watch('Password');
  const wBirthDay = watch('BirthDay');
  const wBirthMonth = watch('BirthMonth');
  const wBirthYear = watch('BirthYear');

  async function signUp(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
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
        toast.error('Email is already registered!', { position: 'top-right' })
      } else {
        toast.warning('Unknown error')
      }
    }
  }
  const handleOnClick = () => {
    toast.error('Incorrectly Completed Form', { position: 'top-right' })
  }
  return (
    <div className='form'>
      <form className='form__inputs' onSubmit={signUp}>
        <Input
          watch={watch}
          validate={isValidFullName}
          register={register}
          name={'FullName'}
          type={'text'}
          icon={<AiOutlineUser />}
          placeholder='Full Name'
        />
        <Input
          watch={watch}
          validate={isValidEmail}
          register={register}
          name={'Email'}
          type={'text'}
          icon={<AiOutlineMail />}
          placeholder='Email Address'
        />
        <Input
          watch={watch}
          validate={isValidPassword}
          register={register}
          name={'Password'}
          type={'password'}
          icon={<AiOutlineLock />}
          placeholder='Password'
        />
        <div className='form__subtext'>Date of birth:</div>
        <div className='form__date'>
          <Select register={register} name={'BirthMonth'} placeholder={'Month'} array={monthsArray} />
          <Input<number>
            watch={watch}
            validate={isValidDay}
            register={register}
            name={'BirthDay'}
            type='number'
            maxLength={2}
            placeholder='Day'
          />
          <Input<number>
            watch={watch}
            validate={isValidYear}
            register={register}
            name={'BirthYear'}
            type='number'
            maxLength={4}
            placeholder='Year'
          />
        </div>
        {mainValidator({ wEmail, wFullName, wPassword, wBirthDay, wBirthYear }) ? (
          <Button text={'Register'} type={'submit'} />
        ) : (
          <Button type={'button'} className={'_disabled'} text={'Register'} callback={handleOnClick} />
        )}
      </form>
    </div>
  );
};