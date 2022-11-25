import { toast } from 'react-toastify';
import { useEffect } from 'react'

export const useErrorInput = (error: string) => {
  useEffect((): void => {
    let errorText = null;
    if (error.includes('user-not-found')) {
      errorText = 'Email is not found';
    }
    if (error.includes('wrong-password')) {
      errorText = 'Wrong password';
    }
    if (error.includes('invalid-email')) {
      errorText = 'Invalid email';
    }
    if (errorText) {
      toast.error(`${errorText}`, { position: 'top-left', autoClose: false });
    }
  }, [error])
};