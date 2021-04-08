
export const authenticationTypes = {
    LOGIN: 'LOGIN',
    SINGUP: 'SINGUP'
}

export interface CredentialsProps {
    username: string;
    email?: string;
    password: string;
}

export type LoginResponseData = {
    username: String,
    email?: String,
    password: String
}

export type SingUpResponseData = {
    username: String,
    email?: String,
    password: String
}

export interface Login {
    type: typeof authenticationTypes.LOGIN,
    payload: LoginResponseData
}

export interface SingUp {
    type: typeof authenticationTypes.SINGUP
    payload: SingUpResponseData
}


export type AuthenticationDispatchTypes = Login | SingUp

