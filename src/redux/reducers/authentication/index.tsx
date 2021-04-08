import { authenticationTypes } from "../../actions/authentication/types"
import { AuthenticationDispatchTypes } from "../../actions/authentication/types"
import { initialState } from "./types"


const authenticationReducer = (
    state = initialState,
    action: AuthenticationDispatchTypes): typeof initialState => {
    switch (action.type) {
        case authenticationTypes.LOGIN:
            return { ...state, token: action.payload }
        case authenticationTypes.SINGUP:
            return { ...state, token: action.payload }
        default:
            return state
    }
}

export default authenticationReducer
