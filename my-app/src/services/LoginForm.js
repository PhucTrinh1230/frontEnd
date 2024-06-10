import React, { useState } from "react";
import axios from "axios";


const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/v1/auth/authenticate', {
                username,
                password
            });
            const { token } = response.data;
            console.log(token);
           localStorage.setItem('tokenFromJava',token);
        } catch (error) {
            setError('Incorrect username or password');
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Login</button>
            {error && <div>{error}</div>}
        </form>
    );
};

export default LoginForm;
