import { combineReducers } from "redux";
import authenticationReducer from "./authentication";

const reducers = combineReducers({
    auth: authenticationReducer
})

export default reducers
