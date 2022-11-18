import { IAction, IUser } from "../../types/types"
import { createStore } from "../store.tsx"


let initUser: IUser = {
    email: null,
    fullName: null,
    id: null,
    token: null
}

function userReducer(state: IUser, action: IAction<IUser>) {
    switch (action.type) {
        case 'ADD_USER':
            return {
                email: action.payload?.email,
                fullName: action.payload?.fullName,
                id: action.payload?.id,
                token: action.payload?.token
            }
        case 'REMOVE_USER':
            return {
                email: null,
                fullName: null,
                id: null,
                token: null
            }
        default:
            return state
    }
}

export const user = createStore<IUser, Partial<IUser>>(userReducer, initUser)

