import { combineReducers } from "redux";
import authenticationReducer from "./authentication";
import recipesReducer from "./recipes";
import { StateType } from 'typesafe-actions'


const reducers = combineReducers({
    auth: authenticationReducer,
    recipes: recipesReducer
})

export type Store = StateType<typeof reducers>

export default reducers
