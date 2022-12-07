import React from 'react';
import Buttons from './Buttons';
import "../../styles/Description.css"

const Description = ({ addToCart, changeQuantity, quantity, product }) => {

    const {
        id,
        company,
        name,
        description,
        price,
        realPrice,
        discount

    } = product

    return (
        <div className='description-container'>
            <div>
                <div className='company'>{company}</div>
                <h1 className='name'>{name}</h1>
                <p className='p'>{description}</p>
                <div className="prices-container">
                    <div className="price-discount">
                        <div className='price'>${price}.00</div>
                        <div className="discount">{discount}%</div>
                    </div>
                    <div className="real-price-container">
                        <div className='real-price'>${realPrice}.00</div>
                    </div>
                </div>
            </div>
            <Buttons
                addToCart={addToCart}
                changeQuantity={changeQuantity}
                quantity={quantity}
                id={id}
            >
            </Buttons>
        </div>
    );
}

export default Description;
