import { useState } from "react";
import { useDispatch } from "react-redux";
import { singUp } from '../../../redux/actions/authentication'

function SingUpPage(): JSX.Element {

    const dispatch = useDispatch();

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (event: any): Promise<void> => {
        event.preventDefault();
        dispatch(singUp({ username, password }))
    }

    return (
        <div className="loginForm">
            <form onSubmit={handleSubmit}>
                <input
                    onChange={
                        ({ target }) => setUsername(target.value)
                    }
                    type="text"
                    name="username"
                    value={username}
                />
                <input
                    onChange={
                        ({ target }) => setPassword(target.value)
                    }
                    type="password"
                    name="password"
                    value={password}
                />
                <button>Sing Up</button>
            </form>
        </div>
    )
}

export default SingUpPage

