import axios from 'axios'
import { Dispatch } from 'react'
import { authenticationTypes, CredentialsProps, Login, SingUp } from './types'



const singUp = (credentials: CredentialsProps) => {

    return async (dispatch: Dispatch<SingUp>) => {

        const response = await axios.post(
            'http://localhost:5001/user/register', credentials)

        dispatch({
            type: authenticationTypes.SINGUP,
            payload: response.data
        })
    }
}

const login = (credentials: CredentialsProps) => {

    return async (dispatch: Dispatch<Login>) => {

        const response = await axios.post(
            'http://localhost:5001/user/login', credentials)

        dispatch({
            type: authenticationTypes.LOGIN,
            payload: response.data
        })
    }
}

export { singUp, login }
