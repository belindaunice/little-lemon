import React from 'react';
import logo from '../src/images/logo.png'

const Nav = () => {
    return (
        <nav>

        <img src={logo} alt='logo'/>

<ul>
    <li><a href="/">Home</a></li>
    <li><a href="/">About</a></li>
    <li><a href="/">Menu</a></li>
    <li><a href="/">Reservations</a></li>
    <li><a href="/">Order Online</a></li>
    <li><a href="/">Log In</a></li>
</ul>
        </nav>
    );

};

export default Nav;
