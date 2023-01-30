import React from 'react';
import "../../styles/MobileMenu.css"

const MobileMenu = ({ handleMenuStatus, menuState }) => {
    return (
        <div className='mobile-menu-container'>
            <div className='back' onClick={()=> handleMenuStatus()}></div>
            <div className={`mobile-menu ${menuState && "menu-active"}`}>
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
