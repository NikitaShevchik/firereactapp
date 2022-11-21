import { userInfo as user } from '../redux/reducers/userReducer';

function useAuth() {
    const { email, token, id, fullName } = user.getState();
    return {
        isAuth: !!email,
        token,
        id,
        fullName
    }
}

export default useAuth;