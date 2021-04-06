import Login from "./Login";
import SingUp from "./SingUp";
import './index.scss'


function Navbar(): JSX.Element {

    return (
        <nav>
            <h1>React Recipes</h1>
            <Login/>
            <SingUp/>
        </nav>
    )
}

export default Navbar
