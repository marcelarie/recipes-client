
export const recipesTypes = {
    GET_RECIPES: 'GET_RECIPES'
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

export interface GetRecipes {
    type: typeof recipesTypes.GET_RECIPES,
    payload: GetRecipesResponse
}

export type RecipesDispatchTypes = GetRecipes
