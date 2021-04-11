import axios from 'axios'
import { Dispatch } from 'react'
import { AddRecipeBodyProps, GetRecipes, recipesTypes } from './types'


const getRecipes = () => {

    return async (dispatch: Dispatch<GetRecipes>) => {

        const response = await axios.get('http://localhost:5001/recipes');

        dispatch({
            type: recipesTypes.GET_RECIPES,
            payload: response.data
        })
    }
}

const addRecipe = (body: AddRecipeBodyProps) => {

    return async (dispatch: Dispatch<GetRecipes>) => {

        const response = await axios.post('http://localhost:5001/recipes/new', body);

        dispatch({
            type: recipesTypes.ADD_RECIPE,
            payload: response.data
        })
    }
}

export { getRecipes, addRecipe }
