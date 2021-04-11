import { RecipesDispatchTypes, recipesTypes } from "../../actions/recipes/types";
import { recipesInitialState } from "./types";


const recipesReducer = (
    state = recipesInitialState,
    action: RecipesDispatchTypes): typeof recipesInitialState => {
    switch (action.type) {
        case recipesTypes.GET_RECIPES:
            console.log(action.payload)
            return { ...state, recipes: action.payload }
        default:
            return state
    }
}

export default recipesReducer
