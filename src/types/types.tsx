import { ReactNode } from "react";
import { FieldValues, UseFormRegister, UseFormWatch } from "react-hook-form";

export interface IUser {
    email?: string | null,
    fullName?: string | null,
    id?: string | null,
    token?: string | null,
    birthMonth?: string | null,
    birthDay?: number | null,
    birthYear?: number | null
};

export interface IAction<T> {
    type: string,
    payload?: Partial<T>
};

export interface IValidation {
    email: string,
    fullName: string,
    password: string,
    day: number,
    year: number,
};
export interface IMainValidation {
    wEmail: string,
    wFullName: string,
    wPassword: string,
    wBirthDay: number,
    wBirthYear: number
};

export interface ButtonProps {
    text: string,
    cb?: VoidFunction
};

export interface FormErrorProps {
    text: string
};

export interface FormOfferProps {
    text: string,
    linkText: string,
    path: string
};

export interface SelectProps<T> {
    array: Array<T>,
    placeholder: string,
    reg: UseFormRegister<FieldValues>,
    name: string
};

export interface PlugProps {
    wdth: number
};

export interface InputSignUpProps<T> {
    watch: UseFormWatch<FieldValues>,
    icon?: ReactNode,
    placeholder?: string,
    type?: string,
    maxLength?: number,
    reg: UseFormRegister<FieldValues>,
    name: string,
    validate: (value: T) => boolean, // посмотреть какой тип нужен по сути это функция возвращает true/false ()=> boolean
};

export interface InputLogInProps<T> {
    icon?: ReactNode,
    placeholder?: string,
    type?: string,
    maxLength?: number,
    state: T, // как типизировать стейт и сетстейт
    setState: React.Dispatch<React.SetStateAction<T>> // как типизировать стейт и сетстейт
};

export interface BlackSquareProps {
    transform: number,
    width: number
};

export interface FormTitleSubtitleProps {
    title: string,
    subtitle: string
};