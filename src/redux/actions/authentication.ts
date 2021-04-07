import axios from 'axios'
import types from '../types/index'


interface CredentialsProps {
    username: string;
    password: string;
}

const singUp = (credentials: CredentialsProps) => {

    return async (dispatch: any): Promise<void> => {

        const response = await axios.post(
            'http://localhost:5001/user/register', credentials)

        dispatch({
            type: types.LOGIN,
            payload: response.data
        })
    }
}

export { singUp }
