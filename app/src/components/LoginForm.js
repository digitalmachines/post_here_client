import React, { useState } from 'react';

export default function LoginForm () {

    const [user, setUser] = useState({ username: '', email: '', password: '' })

    function handleChange(e){
        setUser({...user, [e.target.name]:e.target.value})
        console.log(user); 
    }

    function handleSubmit(){

    }

    return (
        <div>
            <form>
                <h1>Welcome to Post Here Subreddit!</h1>
                <h2>Register below:</h2>
                <label>Username: </label>
                <input name="username" onChange={handleChange} value={user.username}/><br></br>
                <label>Email: </label>
                <input name="email" onChange={handleChange} value={user.email}/><br></br>
                <label>Password: </label>
                <input name="password" onChange={handleChange} value={user.password}/><br></br>
                <button onSubmit={handleSubmit}>Register</button>
                <br></br><br></br>
                OR<br></br><br></br><br></br>
                Login below: 
                <input name="username" onChange={handleChange} value={user.username}/><br></br>
                <label>Password: </label>
                <input name="password" onChange={handleChange} value={user.password}/><br></br>
                <button onSubmit={handleSubmit}>Login</button>
            </form>
        </div>
    )
}