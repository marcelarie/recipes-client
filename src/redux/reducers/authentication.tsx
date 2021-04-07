import types from "../types";

interface AuthenticationState {
    token: null | string
}

const initialState: AuthenticationState = {
    token: null
}

const authenticationReducer = (
    state = initialState,
    action: { type: String; payload: any; }
): { token: any; } => {
    switch (action.type) {
        case types.LOGIN:
            return { ...state, token: action.payload }
        default:
            return state
    }
}

export default authenticationReducer
