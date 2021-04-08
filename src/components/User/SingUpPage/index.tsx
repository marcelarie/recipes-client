import { useState } from "react";
import { useDispatch } from "react-redux";
import { singUp } from '../../../redux/actions/authentication'

function SingUpPage(): JSX.Element {

    const dispatch = useDispatch();

    const [username: String, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        dispatch(singUp({ username, password }))
    }

    return (
        <div className="loginForm">
            <form onSubmit={handleSubmit}>
                <input
                    onChange={
                        ({ target }: React.ChangeEvent<HTMLInputElement>) =>
                            setUsername(target.value)
                    }
                    type="text"
                    name="username"
                    value={username}
                />
                <input
                    onChange={
                        ({ target }: React.ChangeEvent<HTMLInputElement>) =>
                            setPassword(target.value)
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

