import FormError from '../components/FormError/FormError';

const useErrorInput = (error: string) => {
  let errorText = null;
  if (error === 'Firebase: Error (auth/user-not-found).') {
    errorText = 'User/Email is not found';
  } else if (error === 'Firebase: Error (auth/wrong-password).') {
    errorText = 'Wrong password';
  } else if (error === 'Firebase: Error (auth/invalid-email).') {
    errorText = 'Invalid email';
  }
  return errorText && <FormError text={errorText} />;
};

export default useErrorInput;
