import React from 'react';
import CartIcon from "../../icons/icon-cart2.svg";
import PlusIcon from "../../icons/icon-plus.svg";
import MinusIcon from "../../icons/icon-minus.svg";
import "../../styles/Buttons.css"

const Buttons = ({ addToCart, changeQuantity, quantity, product}) => {
    return (
        <div className="btns-container">
            <div className='btns-next-prev'>
                <button onClick={() => changeQuantity("-")} className="btn-minus">
                    <img src={MinusIcon} alt="minus"/>
                </button>
                <div className='quantity'>{quantity}</div>
                <button onClick={() => changeQuantity("+")} className="btn-plus">
                    <img src={PlusIcon} alt="plus"/>
                </button>
            </div>
            <button 
                onClick={() => addToCart()} 
                className="btn-add"
            >
                <img src={CartIcon} alt="cart-icon"/> Add to cart
            </button>
        </div>
    );
}

export default Buttons;
