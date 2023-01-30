import React from 'react';
import NextIcon from "../../icons/icon-next.svg"
import PreviousIcon from "../../icons/icon-previous.svg"
import "../../styles/Images.css"

const Images = ({ thumbnails, handleMainImage, handleModalState, images, imgNumber, handleNumber }) => {
    return (
        <>
            <div className='images-container'>
                <div className='main-image-container' onClick={() => handleModalState()}>
                    <img src={images[imgNumber]} alt="img" />
                </div>
                <div className='thumbnail-images'>
                    {thumbnails.map((thumbnail, idx) =>
                        <div
                            key={idx}
                            className={`thumbnail-container 
                        ${idx === 0 && "thumbnail-left"}
                        ${idx === 3 && "thumbnail-right"}
                        ${idx === imgNumber && "thumbnail-select"}
                        `}
                        >
                            <img
                                src={thumbnail}
                                alt="img"
                                onClick={() => handleMainImage(idx)}
                                className={`thumbnail-img ${idx === imgNumber && "img-select"}`}
                            />
                        </div>
                    )}
                </div>

            </div>
            <div className='mobile-img-container'>
                <div className='mobile-previous-btn' onClick={() => handleNumber("-")}>
                    <img src={PreviousIcon} alt={"img"} className="mobile-icon" />
                </div>
                <div className='equisde'>
                    <img src={images[imgNumber]} alt={"img"} className="mobile-main-img" />
                </div>
                <div className='mobile-next-btn' onClick={() => handleNumber("+")}>
                    <img src={NextIcon} alt={"img"} className="mobile-icon" />
                </div>
            </div>
        </>
    );
}

export default Images;
