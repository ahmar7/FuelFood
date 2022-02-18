import React from 'react';
import { Divider, Button } from '@mui/material';
import Logo from '../../assets/images/logo.png'
import Login from '../../assets/images/login.png'
import './header.css'
import LockIcon from '@mui/icons-material/Lock';

const Header = () => {
    return (
        <div className='container'>
            <header className='main-header'>
                <div className='logo-area'>
                    <img src={Logo} />
                </div>
                <div className='sign-area'>

                    <a className='blog' href='#'>Blog</a>

                    <button className='sign-up'>SignUp</button>

                    <span> <a href='#'><img className='login' src={Login} /></a></span>
                </div>
            </header >
            <Divider />


        </div >
    );
}

export default Header;
