export interface IUser {
    email: string | null,
    fullName?: string | null,
    id: string | null,
    token: string | null,
    birthMonth?: string | null,
    birthDay?: number | null,
    birthYear?: number | null
}

export interface IAction<T> {
    type: string,
    payload?: Partial<T>
}