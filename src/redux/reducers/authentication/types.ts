
interface AuthenticationState {
    token: null | string | Object
}

export const initialState: AuthenticationState = {
    token: null
}
