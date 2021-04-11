
export const recipesTypes = {
    GET_RECIPES: 'GET_RECIPES',
    ADD_RECIPE: 'ADD_RECIPE'
}

export interface Recipe {
    date: String,
    ingridients: [String],
    comments: [String],
    _id: String,
    description: String,
    imageUrl: String,
    author: String,
    upVotes: String,
    downVotes: String
}

export interface GetRecipesResponse {
    // [key: string]: Recipe
    recipes: Array<Recipe>
}

export interface AddRecipeResponse {
    message: Boolean
}

export interface AddRecipeBodyProps {
    title: string;
    description: string;
    ingridients: string;
}
export interface GetRecipes {
    type: typeof recipesTypes.GET_RECIPES,
    payload: GetRecipesResponse
}

export interface AddRecipe {
    type: typeof recipesTypes.ADD_RECIPE,
    payload: AddRecipeResponse
}

export type RecipesDispatchTypes = GetRecipes | AddRecipe
