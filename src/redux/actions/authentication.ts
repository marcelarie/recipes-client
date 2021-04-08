import axios from 'axios'
import { Dispatch } from 'react'
import { authenticationTypes, AuthenticationDispatchTypes, CredentialsProps } from './authenticationTypes'



const singUp = (credentials: CredentialsProps) => {

    return async (dispatch: Dispatch<AuthenticationDispatchTypes>) => {

        const response = await axios.post(
            'http://localhost:5001/user/register', credentials)

        dispatch({
            type: authenticationTypes.SINGUP,
            payload: response.data
        })
    }
}

export { singUp }
