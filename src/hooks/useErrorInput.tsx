import FormError from '../components/FormError/FormError';

const useErrorInput = (error: string) => {
  let errorText = null;
  if (error.includes('user-not-found')) {
    errorText = 'User/Email is not found';
  } else if (error.includes('wrong-password')) {
    errorText = 'Wrong password';
  } else if (error.includes('invalid-email')) {
    errorText = 'Invalid email';
  }
  return errorText && <FormError text={errorText} />;
};

export default useErrorInput;
