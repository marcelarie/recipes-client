
const authenticationTypes = {
    LOGIN: 'LOGIN',
    SINGUP: 'SINGUP'
}


export interface CredentialsProps {
    username: string;
    password: string;
}

type LoginResponseData = {
    username: String,
    email: String,
    password: String
}

interface Login {
    type: typeof authenticationTypes.LOGIN,
    payload: LoginResponseData
}

interface SingUp {
    type: typeof authenticationTypes.SINGUP
}

export type AuthenticationDispatchTypes = Login | SingUp

export { authenticationTypes }
