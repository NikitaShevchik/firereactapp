import { useEffect, useState } from 'react';
import FormError from '../components/FormError/FormError';

const useErrorInput = (error: string) => {
    return error === 'Firebase: Error (auth/user-not-found).'
        ?
        <FormError text={'User/Email is not found'} />
        :
        error === 'Firebase: Error (auth/wrong-password).'
            ?
            <FormError text={'Wrong password'} />
            :
            error === 'Firebase: Error (auth/invalid-email).'
                ?
                <FormError text={'Invalid email'} />
                :
                null
}

export default useErrorInput;