import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <h1>SPORTS-CAR</h1>
            <div className='menubar'>
                <a href="/home">HOME</a>
                <a href="/home">ABOUT</a>
                <a href="/home">SERVICE</a>
            </div>
        </div>
    );
};

export default Header;