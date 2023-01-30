import React from 'react';
import CloseIcon from "../../icons/icon-close.svg"
import PreviousIcon from "../../icons/icon-previous.svg"
import NextIcon from "../../icons/icon-next.svg"
import "../../styles/Modal.css"
import "../../styles/Modal2.scss"

const Modal = ({  
    modalThumbnails,
    handleModalState, 
    modalState, 
    mainModalImg, 
    handleModalImg, 
    modalImgNumber, 
    handleModalImage2
    }) => {

    const handleState = () => {
        modalState && handleModalState()
    }

    return (
        <div className='modal-container'>
            <div className='modal' onClick={() => handleState()}></div>
            <div className='modal-images' >
                <div className='cross-icon-container' >
                    <div onClick={() => handleState()} style={{cursor: "pointer"}}>
                        <img src={CloseIcon} alt="img"  className='cross-icon'/>
                    </div>
                </div>
                <div className='modal-img-container'>
                    <div className='modal-previous-btn' onClick={() => handleModalImg("-")}>
                        <img src={PreviousIcon} alt={"img"} className="modal-btn"/>
                    </div>
                    <div>
                        <img src={mainModalImg[modalImgNumber]} alt={"img"} className="modal-main-img"/>
                    </div>
                    <div className='modal-next-btn' onClick={() => handleModalImg("+")}>
                        <img src={NextIcon} alt={"img"} className="modal-btn"/>
                    </div>
                </div>
                <div className='modal-thumbnails'>
                    {modalThumbnails.map((image, idx) => 
                        <div key={idx} className={`modal-tmb-container ${idx === modalImgNumber && "modal-select"}`}>
                            <img 
                            src={image} 
                            alt={"img"} 
                            className={`modal-thumbnail-img ${idx === modalImgNumber && "img-select"}`}
                            onClick={() => handleModalImage2(idx)}
                            />
                            <div className='thumb-back'></div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Modal;
