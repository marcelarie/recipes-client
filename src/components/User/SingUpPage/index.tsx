import { useState } from "react";
import { useDispatch } from "react-redux";
import { singUp } from '../../../redux/actions/authentication'

function SingUpPage(): JSX.Element {

    const dispatch = useDispatch();

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        dispatch(singUp({ username, email, password }))
    }


    return (
        <div className="loginForm">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="username"
                    value={username}
                    required
                    onChange={(
                        event: React.ChangeEvent<HTMLInputElement>) =>
                        setUsername(event.target.value)
                    }
                />
                <input
                    type="text"
                    placeholder="email"
                    name="email"
                    value={email}
                    required
                    onChange={(
                        event: React.ChangeEvent<HTMLInputElement>) =>
                        setEmail(event.target.value)
                    }
                />
                <input
                    type="password"
                    placeholder="password"
                    name="password"
                    value={password}
                    required
                    onChange={(
                        event: React.ChangeEvent<HTMLInputElement>) =>
                        setPassword(event.target.value)
                    }
                />
                <button type='submit'>Sing Up</button>
            </form>
        </div>
    )
}

export default SingUpPage

