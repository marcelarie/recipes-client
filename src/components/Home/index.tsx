
import Recipes from './Recipes'
import NewRecipeForm from './Recipes/NewRecipeForm'

function Home() {
    return (
        <div>
            <NewRecipeForm />
            <Recipes />
        </div>
    )
}

export default Home

