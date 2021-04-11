
import { useSelector } from 'react-redux'
import LoginPage from '../User/LoginPage'
import Recipes from './Recipes'
import NewRecipeForm from './Recipes/NewRecipeForm'


function Home() {

    const user = useSelector(
        (store: any) => store.auth
    )

    if (user.token) {
        return (
            < div >
                <NewRecipeForm />
                <Recipes />
            </div >
        )
    }

    return (
        <LoginPage />
    )

}

export default Home

