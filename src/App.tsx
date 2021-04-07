import { Route } from 'react-router';
import Home from './components/Home';
import LoginPage from './components/User/LoginPage';
import Navbar from './components/Navbar';
import SingUpPage from './components/User/SingUpPage';
import './index.css';


function App(): JSX.Element {

    return (
        <div className="App">
            <Navbar />
            <Route exact path='/'>
                <Home />
            </Route>
            <Route exact path='/login'>
                <LoginPage />
            </Route>
            <Route exact path='/sing-up'>
                <SingUpPage />
            </Route>
        </div>
    );
}

export default App;
