import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SignUp = () => {
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [ConfirmPassword , setConfiremPassword] = useState('')
    const [error , setError] = useState('')
    const navigate = useNavigate()
    const hendleEmail = event => {
        setEmail(event.target.value);
    }
    const hendlePassword = event => {
        setPassword(event.target.value);
        
    }
    const hendleConfiremPassword = event => {
        setConfiremPassword(event.target.value);
    }
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
       
      ] = useCreateUserWithEmailAndPassword(auth);
      if(user){
        console.log(user)
        navigate('/')
    }
    const hendleSubmite = event => {
        event.preventDefault()
        if(password !== ConfirmPassword){
            setError('Password not match')
            return;
        }
        if(password.length !== 6) {
            setError('Minimum 6 cherecter')
        }
       
        else{
            setError('')
        };
        createUserWithEmailAndPassword(email, password)
  
    }

    return (
        <div className='form-container'>
        <h2 className='form-title'>Sign Up</h2>
        <form onSubmit={hendleSubmite}>
            <div className='group-input'>
                <span className='level'>Email</span>
                <input onBlur={hendleEmail} className='' type='email' required></input>
            </div>
            <div className='group-input'>
                <span className='level'>Password</span>
                <input onBlur={hendlePassword} className='' type='password' required></input>
            </div>
            <div className='group-input'>
                <span className='level'>Confirm-Password</span>
                <input onBlur={hendleConfiremPassword} className='' type='password' required></input>
            </div>
            <p>{error}</p>
            <input type='submit'  className='submite-button'></input>
        </form>
        <p style={{marginTop:'8px'}}>New to Ema-zon? <Link to='/login'>LogIn</Link></p>
        <div className='or-section'>
            <hr />
            <span>or</span>
            <hr />
        </div>
        <button className='google-button'>Google</button>
</div>
    );
};

export default SignUp;