import React from 'react';
import "./Header.css"
import logo from "../../../ema-john-resources-main/ema-john-resources-main/images/Logo.svg"

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <div className='nav-list'>
                <a href="">Home</a>
                <a href="">Service</a>
                <a href="">Blogs</a>
                <a href="">Contact Us</a>
            </div>
        </div>
    );
};

export default Header;