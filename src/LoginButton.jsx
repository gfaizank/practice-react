import React from 'react';


const LoginButton = () => {
    const [isAuthenticate, login, logout]=useAuth();
    return (
        <div>
            {isAuthenticate ? (
                <button onClick={logout}>Logout</button>
            ):(
                <button onClick={login}>Login</button>
            )}
        </div>
    );
}

export default LoginButton;
