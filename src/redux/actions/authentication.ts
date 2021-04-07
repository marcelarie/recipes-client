import axios, { AxiosResponse } from 'axios'
import types from '../types/index'


interface CredentialsProps {
    username: string,
    password: string
}

interface AuthenticationProps {
    singUp: Function,
}

const authentication: AuthenticationProps = {
    singUp: (credentials: CredentialsProps) => {
        return async (dispatch: any): Promise<void> => {

            const response = await axios.post<AxiosResponse>(
                'http://localhost:5001/login',
                {},
                { auth: credentials }
            )

            dispatch({
                type: types.LOGIN,
                payload: response.data
            })
        }
    }
}

export default authentication
