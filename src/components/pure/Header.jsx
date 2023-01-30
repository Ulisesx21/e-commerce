import React from 'react';
import Logo from "../../icons/logo.svg";
import CartIcon from "../../icons/icon-cart.svg";
import ImgAvatar from "../../images/image-avatar.png";
import MenuIcon from "../../icons/icon-menu.svg"
import CloseIcon from "../../icons/icon-close.svg"

import "../../styles/Header.css";
import Cart from './Cart';

const Header = ({ cartState, handleCartState, cart, clearCart, menuState, handleMenuStatus }) => {
    return (
        <header>
            <nav>
                <div className='logo-list-container'>
                    <div className='menu_cross-icons' onClick={() => handleMenuStatus()}>
                        <img src={ menuState ? CloseIcon : MenuIcon} alt={"img"}></img>
                    </div>
                    <img src={Logo} alt="name-logo" className='name-logo'/>
                    <ul className='ul'>
                        <li>Collections</li>
                        <li>Men</li>
                        <li>Women</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className='cart-avatar-container'>
                    <div style={{position: "relative"}}>
                        <div style={{display: "flex"}} onClick={() => handleCartState()}>
                            <img src={CartIcon} alt="cart-icon" className='cart-icon' />
                            {cart[0]?.quantity > 0 && <div className='bubble-alert'>{cart[0]?.quantity > 9 ? "9+" : cart[0]?.quantity}</div>}
                        </div>
                        {cartState &&
                        <div className='cart-Details'>
                            <div className='cart'>Cart</div>
                            {cart.map((product, idx) => 
                                <Cart product={product} idx={idx} clearCart={clearCart} key={idx}></Cart>
                            )}
                            {cart.length > 0 
                            ? 
                            <button className='checkout-btn'>Checkout</button> 
                            : 
                            <div className='empty-cart'>Your cart is empty.</div>}
                        </div>}
                    </div>
                    <div className='avatar-container'>
                        <img src={ImgAvatar} alt="user-avatar" className='avatar-user'/>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
