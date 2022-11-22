import { IMainValidation } from './types/types';

export function isValidEmail(email: string) {
  return /\S+@\S+\.\S+/.test(email);
}

export function isValidFullName(fullName: string) {
  return /\S{2,}/.test(fullName);
}

export function isValidPassword(password: string) {
  const withoutSpecialChars = /^[^-() /]*$/;
  const containsLetters = /^.*[a-zA-Z]+.*$/;
  const minimum8Chars = /^.{8,}$/;
  const minOneBigLetter = /^.*[A-Z]{1}.*$/;
  if (
    minimum8Chars.test(password) &&
    withoutSpecialChars.test(password) &&
    containsLetters.test(password) &&
    minOneBigLetter.test(password)
  ) {
    return true;
  } else {
    return false;
  }
}

export function isValidDay(day: number) {
  return day > 0 && day <= 31;
}

export function isValidYear(year: number) {
  if (year > 1900 && year <= 2010) {
    return true;
  } else {
    return false;
  }
}

export function mainValidator({
  wEmail,
  wFullName,
  wPassword,
  wBirthDay,
  wBirthYear,
}: IMainValidation) {
  if (
    isValidEmail(wEmail) &&
    isValidFullName(wFullName) &&
    isValidPassword(wPassword) &&
    isValidDay(wBirthDay) &&
    isValidYear(wBirthYear)
  ) {
    return true;
  } else {
    return false;
  }
}
