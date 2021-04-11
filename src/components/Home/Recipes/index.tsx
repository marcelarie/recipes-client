
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipes } from '../../../redux/actions/recipes';
// import { Store } from '../../../redux/reducers'
import './index.scss'
import Recipe from './Recipe';

function Recipes() {

    const dispatch = useDispatch();

    //                              v create types for this 👷
    const recipes = useSelector((store: any) => store.recipes);

    useEffect(() => {
        dispatch(getRecipes())
    }, [dispatch])

    return (
        <div className='recipesContainer'>
            {
                //                              v create types for this 👷
                recipes.recipes && recipes.recipes.map((recipe: any) => <Recipe key={recipe._id} recipe={recipe} />)
            }
        </div>
    )
}

export default Recipes

