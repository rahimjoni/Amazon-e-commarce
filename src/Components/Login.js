import React, {useState} from 'react';
import './Login.css';
import {Link, useHistory} from 'react-router-dom';
import {auth} from "../firebase";

function Login(props) {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const history = useHistory();

    const login = (event)=>{
        event.preventDefault()
        auth
            .signInWithEmailAndPassword(email,password)
            .then((auth)=>{
                history.push('/')
            })
            .catch(error =>alert(error.message))
    }

    const register = (event) =>{
        event.preventDefault();
        auth
            .createUserWithEmailAndPassword(email,password)
            .then((auth) =>{
                if (auth){
                    history.push('/')
                }
            })
            .catch(error=>alert(error.message))
    }

    return (
        <div className="login">
            <Link to='/'>
                <img className="login-logo" src="http://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"/>
            </Link>
            <div className="login-container">
                <h1>Sign-In</h1>
                <form>
                    <h5>Email or mobile phone number</h5>
                    <input type='text' value={email} onChange={e=>setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e=>setPassword(e.target.value)}/>

                    <button className="login-singin" type="submit" onClick={login}>Sign in</button>
                </form>
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                <button className="login-signUp" type="submit" onClick={register}>Create Your Amazon Account</button>
            </div>
        </div>
    );
}

export default Login;