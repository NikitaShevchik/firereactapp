import { IAction, IUser } from '../../types/types';
import { createStore } from '../store';


const initUser: IUser = {
  email: null,
  fullName: null,
  id: null,
  token: null,
  birthMonth: null,
  birthDay: null,
  birthYear: null,
};

function userReducer(state: IUser, action: IAction<IUser>) {
  switch (action.type) {
    case 'ADD_USER':
      return {
        email: action.payload?.email,
        fullName: action.payload?.fullName,
        id: action.payload?.id,
        token: action.payload?.token,
        birthMonth: action.payload?.birthMonth,
        birthDay: action.payload?.birthDay,
        birthYear: action.payload?.birthYear,
      };
    case 'REMOVE_USER':
      return {
        email: null,
        fullName: null,
        id: null,
        token: null,
        birthMonth: null,
        birthDay: null,
        birthYear: null,
      };
    default:
      return state;
  }
}

export const userInfo = createStore<IUser, Partial<IUser>>(userReducer, initUser);
