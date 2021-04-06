import Login from "./Login";
import SingUp from "./SingUp";
import './index.scss'
import { NavLink } from "react-router-dom";


function Navbar(): JSX.Element {

    return (
        <nav>
            <NavLink to='/'>
                <h1 style={{ color: 'White'}}>React Recipes</h1>
            </NavLink>           
            <NavLink to='/login'>
                <Login/>
            </NavLink>           
            <NavLink to='/sing-up'>
                <SingUp/>
            </NavLink>           
        </nav>
    )
}

export default Navbar
