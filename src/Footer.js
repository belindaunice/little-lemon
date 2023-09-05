import React from "react";
import Logo from '../src/images/logo-2.png';

const Footer = () => {
    return (
        <nav>
            <img src={Logo}></img>

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


export default Footer;