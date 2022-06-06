import React, { useState } from 'react';
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import google from '../../images/google.png'
import facebook from '../../images/fb.png'
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error1,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [signInWithGoogle, userG, loadingG, errorG] = useSignInWithGoogle(auth);

    const handleEmail = e => {
        setEmail(e.target.value)
    }
 
    const handlePassword = e => {
        setPassword(e.target.value)
    }

    const handleCorrectPass = e => {
        // setCorrectPss(event.target.value);
    }
    console.log(email, password);

    if(user){
        navigate('/')
    }

    const handleCreatUser = (event) => {
        event.preventDefault();
        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className='login-container' data-aos="zoom-in-up" data-aos-duration="800">
            <h1>Sign Up</h1>
            <form onSubmit={handleCreatUser}>
                <div className="input-item">
                    <label htmlFor="email">Email</label>
                    <input onChange={handleEmail} type="email" name="email" id="" required />
                </div>
                <div className="input-item">
                    <label htmlFor="password">Password</label>
                    <input onChange={handlePassword} type="password" name="password" id="" required />
                </div>
                <div className="input-item">
                    <label htmlFor="password">Correct Password</label>
                    <input onChange={handleCorrectPass} type="password" name="password" id="" required />
                </div>
                <div className="btn-item">
                    <button type='submit' className='login-btn btn'>Sign Up</button>
                    <p>Already have an account? <Link to='/login' className='signup-link'>Login</Link> </p>
                </div>
                <div className="or-item">
                    <div className="item"></div>
                    <span>OR</span>
                    <div className="item"></div>
                </div>
                <div onClick={() => signInWithGoogle()}  className="google-sign mb-3">
                    <img className='google' src={google} alt="" />
                    <p className='w-100 fw-bold mt-3 text-center'>Sign in With Google</p>
                </div>
                <div className="google-sign">
                    <img className='google' src={facebook} alt="" />
                    <p className='w-100 fw-bold mt-3 text-center'>Sign in With Facebook</p>
                </div>
            </form>
        </div>
    );
};

export default SignUp;