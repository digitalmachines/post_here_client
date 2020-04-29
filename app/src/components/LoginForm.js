import React, { useState } from 'react';
import axios from 'axios'; 
import TextField from '@material-ui/core/TextField'; 
import Button from '@material-ui/core/Button'; 

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
                <h1>Post Here for Subreddit!</h1>
                <h2>Register below:</h2>
                <label>Name: </label>
                <TextField variant="outlined" name="name" onChange={handleRegisterChange} value={register.name}/><br></br>
                <label>Username (*): </label>
                <TextField variant="outlined" name="username" onChange={handleRegisterChange} value={register.username}/><br></br>
                <label>Email (*): </label>
                <TextField variant="outlined" name="email" onChange={handleRegisterChange} value={register.email}/><br></br>
                <label>Password (*): </label>
                <TextField variant="outlined" name="password" onChange={handleRegisterChange} value={register.password}/><br></br>
                <Button variant="outlined" onClick={handleRegister}>REGISTER</Button>
                <br></br><br></br>
                OR<br></br><br></br><br></br>
                Login below: 
                <TextField variant="outlined" name="username" onChange={handleLoginChange} value={login.username}/><br></br>
                <label>Password: </label>
                <TextField variant="outlined" name="password" onChange={handleLoginChange} value={login.password}/><br></br>
                <Button variant="outlined" onClick={handleLogin}>LOGIN</Button>
            </form>
        </div>
    )
}