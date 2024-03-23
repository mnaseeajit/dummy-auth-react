import React, { useState } from "react";

const Login = ({handleLogin}) => {
    const[username , setUsername] = useState("");
    const[password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin(username , password);
    }

    return (
        <div>
            <h1>login</h1>
            <label htmlFor="username">Username : </label>
            <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <br />
            <br/>
            <label htmlFor="password">Password : </label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>  
            <br/>
            <br/>
            <button type="submit" onClick={handleSubmit}>Login</button>
        </div>
    )
}

export default Login;