import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';

const Header = () => {
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
                    </li>

                </div>
            </nav>
        </div>
    );
};

export default Header;