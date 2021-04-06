import { useState } from "react";

function SingUpPage(): JSX.Element {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        console.log(event)
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
                />
                <input
                    onChange={
                        ({ target }) => setPassword(target.value)
                    }
                    type="password"
                    name="password"
                />
                <button>Sing Up</button>
            </form>
        </div>
    )
}

export default SingUpPage

