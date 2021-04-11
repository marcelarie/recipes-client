import axios from 'axios'
import { Dispatch } from 'react'
import { GetRecipes, recipesTypes } from './types'


const getRecipes = () => {

    return async (dispatch: Dispatch<GetRecipes>) => {

        const response = await axios.get('http://localhost:5001/recipes');

        dispatch({
            type: recipesTypes.GET_RECIPES,
            payload: response.data
        })
    }
}

export { getRecipes }
