import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth)
    const hendleSignOut = () => signOut(auth)
    return (
        <div>
            <nav className='manue'>
                <div className='header-container'>
                    <img src={logo}></img>
                    <li className='pages'>
                        <Link to='/'>Home</Link>
                        <Link to='/about'>About</Link>
                        <Link to='/shop'>Shop</Link>
                        <Link to='/cart'>Cart</Link>
                        <Link to='/order'>Orders</Link>
                        {
                              user ? 
                             <button onClick={hendleSignOut} style={{marginLeft:'10px'}}>Sing Out</button> :
                             <Link to='/login'>Log In</Link>
                        }
                        {
                              !user ? 
                              <Link to='/signup'>Sign Up</Link> : ''
                        }
                    </li>

                </div>
            </nav>
        </div>
    );
};

export default Header;