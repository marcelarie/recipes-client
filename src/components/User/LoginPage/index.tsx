import '../index.scss'

function LoginPage(): JSX.Element {
    return (
        <div className="loginForm">
            <form>
            <input type="text" name="username" value=""/>
            <input type="password" name="password" value=""/>
            <button>Login</button>
            </form>
        </div>
    )
}

export default LoginPage

