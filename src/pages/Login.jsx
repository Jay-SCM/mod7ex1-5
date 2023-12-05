import React from 'react';
const Login = () => {
    return (
        <div>
            <h2>Login Page</h2>
            <form>
                <label>
                    Username:
                    <input type="text" />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" />
                </label>
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};
export default Login;