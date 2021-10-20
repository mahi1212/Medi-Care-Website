import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import React, { useState } from 'react';
import useAuth from "../../hook/useAuth";
import loginEnim from '../../Images/login.png'
import initializeAuthentication from "../Firebase/Firebase.init";

initializeAuthentication()
const Login = () => {
    const [user, setUser] = useState({})
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const auth = getAuth();
    const {signInUsingGoogle} = useAuth()
    const toggleLogin = e => {
        setIsLogin(e.target.checked)
    }
    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    const handleRegistrationProcess = e => {
        e.preventDefault();
        console.log(email, password);

        if (isLogin) {
            handleLogin(auth, email, password);
        }
        else {
            registerNewUser(auth, email, password);
        }

    }

    const handleLogin = (auth, email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const registerNewUser = (auth, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
                setError('');
                verifyEmail();
                setUserName();
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, 
        { displayName: name }).then(result => { })
    }
    // Varifying email
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result);
            })
    }


    return (
        <div className='d-flex flex-wrap my-4'>
            <div>
                <img src={loginEnim} alt="" />
            </div>
            <div className='pt-3 px-4 ms-5'>
                <h3 className='mt-5 pt-5 text-primary'>{isLogin ? 'LOGIN PAGE' : 'REGISTRATION PAGE'}</h3>
                <form onSubmit={handleRegistrationProcess}>
                    {!isLogin && <div className="mb-3 mt-3">
                        <label for="name" onBlur={handleNameChange} className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" />
                    </div>}
                    <div className="mb-3">
                        <label for="exampleInputEmail1" onBlur={handleEmailChange} className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" onBlur={handlePasswordChange} className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" onChange={toggleLogin} className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">ALready registered ? </label>
                    </div>
                    <p className='text-danger'>{error}</p>
                    <button type="submit" className="btn btn-primary my-3">{isLogin ? 'Login' : 'Register'}</button>
                </form>

                <p className='text-secondary py-3'> ____________________ <sub>or</sub> ____________________</p>
                <button className='btn btn-primary px-5 mx-auto' onClick={signInUsingGoogle}><span className='px-4'>Sign in using Google</span></button>
            </div>
        </div>
    );
};

export default Login;