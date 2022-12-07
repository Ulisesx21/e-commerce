import React from 'react';
import "../../styles/MobileMenu.css"

const MobileMenu = ({ changeMenuStatus }) => {
    return (
        <div className='mobile-menu-container'>
            <div className='back' onClick={()=> changeMenuStatus()}></div>
            <div className='mobile-menu'>
                <ul>
                    <li>Collections</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    );
}

export default MobileMenu;
