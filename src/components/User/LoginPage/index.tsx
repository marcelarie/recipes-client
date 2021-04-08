import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {  login } from '../../../redux/actions/authentication';
import '../index.scss'

function LoginPage(): JSX.Element {

    const dispatch = useDispatch();

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handlesubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        dispatch(login({ username, password }))
    }

    return (
        <div className="loginForm">
            <form onSubmit={handlesubmit}>
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
                    type="password"
                    name="password"
                    placeholder="password"
                    value={password}
                    required
                    onChange={(
                        event: React.ChangeEvent<HTMLInputElement>) =>
                        setPassword(event.target.value)
                    }
                />
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default LoginPage

