import React from 'react';
import DeleteIcon from "../../icons/icon-delete.svg";
import "../../styles/Cart.css"

const Cart = ({ product, idx, clearCart}) => {
    return (
        <div>
            <div key={idx} className="cart-container">
                <div>
                    <img alt={product.name} src={product.images[0]} className="cart-thumbnail" />
                </div>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "2px 0 6px 0" }}>
                    <div>
                        <h3 className='cart-name'>{product.name}</h3>
                    </div>
                    <div style={{ display: "flex" }}>
                        <div className='cart-price'>${product.price}.00</div>
                        <span className='cart-span'>x</span>
                        <div className='cart-quantity'>{product.quantity}</div>
                        <div className='cart-total'>${product.price * product.quantity}.00</div>
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <img src={DeleteIcon} alt="delete-icon" onClick={() => clearCart()} style={{ cursor: "pointer" }} />
                </div>
            </div>
        </div>
    );
}

export default Cart;
