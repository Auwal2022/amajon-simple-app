import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import './Header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <nav className='nav-container'>
                <img src={logo} alt="" />
                
                <ul className='menu-items'>
                    <li><a href="home">Home</a></li>
                    <li><a href="orders">Orders</a></li>
                    <li><a href="mission">Mission</a></li>
                    <li><a href="products">Products</a></li>
                    <li><a href="about">About</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;