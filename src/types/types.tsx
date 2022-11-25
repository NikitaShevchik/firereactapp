import { ReactNode } from 'react';
import { FieldValues, UseFormRegister, UseFormWatch } from 'react-hook-form';
export interface IUser {
  email?: string | null;
  fullName?: string | null;
  id?: string | null;
  token?: string | null;
  birthMonth?: string | null;
  birthDay?: number | null;
  birthYear?: number | null;
}
export interface IAction<T> {
  type: string;
  payload?: Partial<T>;
}
export interface IValidation {
  email: string;
  fullName: string;
  password: string;
  day: number;
  year: number;
}
export interface IMainValidation {
  wEmail: string;
  wFullName: string;
  wPassword: string;
  wBirthDay: number;
  wBirthYear: number;
}
export interface ButtonProps {
  text: string;
  callback?: VoidFunction;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}
export interface FormOfferProps {
  text: string;
  linkText: string;
  path: string;
}
export interface SelectProps<T> {
  array: Array<T>;
  placeholder: string;
  register: UseFormRegister<FieldValues>;
  name: string;
}
export interface InputSignUpProps<T> {
  watch: UseFormWatch<FieldValues>;
  icon?: ReactNode;
  placeholder?: string;
  type?: string;
  maxLength?: number;
  register: UseFormRegister<FieldValues>;
  name: string;
  validate: (value: T) => boolean;
}
export interface InputLogInProps<T> {
  icon?: ReactNode;
  placeholder?: string;
  type?: string;
  maxLength?: number;
  state: T;
  setState: React.Dispatch<React.SetStateAction<T>>;
}
export interface BlackSquareProps {
  transform: number;
  width: number;
}
export interface FormTitleSubtitleProps {
  title: string;
  subtitle: string;
}
