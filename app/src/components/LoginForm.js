import React, { useState } from 'react';
import axios from 'axios'; 
import TextField from '@material-ui/core'; 
import Button from '@material-ui/core'; 

export default function LoginForm () {

    const [login, setLogin] = useState({ username: '', password: '' })
    const [register, setRegister] = useState({ name: '', username: '', email: '', password: '' })
    let token = ''; 

    function handleRegisterChange(event){
        setRegister({...register, [event.target.name]:event.target.value}); 
        console.log(register); 
    }

    function handleLoginChange(event){
        setLogin({...login, [event.target.name]:event.target.value}); 
        console.log(login); 
    }

    function handleRegister(event){
        event.preventDefault(); 
        axios.post('https://post-here-subreddit.herokuapp.com/api/auth/register', register)
            .then(response => {
                console.log("Successfully registered!: ", response.data.response); 
            })
            .catch(error => {
                console.log(error); 
            })
    }

    function handleLogin(event){
        event.preventDefault(); 
        axios.post('https://post-here-subreddit.herokuapp.com/api/auth/login', login)
            .then(response => {
                console.log(response); 
                token = response.data.token; 
                console.log('Token: ', token); 
            })
            .catch(error => {
                console.log(error); 
            })
    }

    return (
        <div>
            <form>
                <h1>Welcome to Post Here Subreddit!</h1>
                <h2>Register below:</h2>
                <label>Name: </label>
                <TextField name="name" onChange={handleRegisterChange} value={register.name}/><br></br>
                <label>Username (*required): </label>
                <input name="username" onChange={handleRegisterChange} value={register.username}/><br></br>
                <label>Email (*required): </label>
                <input name="email" onChange={handleRegisterChange} value={register.email}/><br></br>
                <label>Password (*required): </label>
                <input name="password" onChange={handleRegisterChange} value={register.password}/><br></br>
                <button onClick={handleRegister}>REGISTER</button>
                <br></br><br></br>
                OR<br></br><br></br><br></br>
                Login below: 
                <input name="username" onChange={handleLoginChange} value={login.username}/><br></br>
                <label>Password: </label>
                <input name="password" onChange={handleLoginChange} value={login.password}/><br></br>
                <button onClick={handleLogin}>LOGIN</button>
            </form>
        </div>
    )
}