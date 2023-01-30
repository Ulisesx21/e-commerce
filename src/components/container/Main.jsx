import React, { useState } from 'react';
import Header from '../pure/Header';
import Description from '../pure/Description';
import Images from '../pure/Images';
import Modal from '../pure/Modal';
import data from "../../data/data.json";
import "../../styles/Main.css";
import MobileMenu from '../pure/MobileMenu';


const Main = () => {
    
    // Product Images
    const [imgNumber, setImgNumber] = useState(0);
    const [images] = useState(data.images);
    const [thumbnailImages] = useState(data.thumbnails);

    // Cart
    const [cart, setCart] = useState([]);
    const [productQuantity, setProductQuantity] = useState(0);
    const [cartState, setCartState] = useState(false);

    // Modal
    const [modalState, setModalState] = useState(false);
    const [modalImgNumber, setModalImgNumber] = useState(0);
    const [mainModalImg] = useState(data.images);
    const [modalThumbnails] = useState(data.thumbnails);

    //Menu Mobile
    const [menuState, setMenuState] = useState(false);


    const addToCart = (id) => {
        if (productQuantity === 0) return
        if (cart.length === 0){
            const temp = [...cart]
            temp.push({
                ...data,
                quantity: productQuantity
            })
            setCart(temp)
            setProductQuantity(0)
        } else {
            const temp = [...cart]
            temp[0] = {
                ...temp[0],
                quantity: temp[0].quantity + productQuantity
            }
            setCart(temp)
            setProductQuantity(0)
        }
    }

    const clearCart = () => {
        setCart([])
    }

    const handleQuantity = (str) => {
            return str === "+" 
            ? 
            setProductQuantity(productQuantity + 1) 
            : 
            productQuantity === 0 
                ? null 
                : setProductQuantity(productQuantity - 1)  
    }

    const handleMainImage = (idx) => {
        setImgNumber(idx)
    }

    const handleNumber = (str) => {
        if(str === "+"){
            if(imgNumber === images.length-1){
                setImgNumber(0)
            }else{
                setImgNumber(imgNumber + 1)
            }
        }else{
            if(imgNumber === 0){
                setImgNumber(images.length-1)
            }else{
                setImgNumber(imgNumber - 1)
            }
        }
    }

    const handleCartState = () => {
        setCartState(!cartState)
    }

    const handleModalState = () => {
        setModalState(!modalState)
    }

    // With Icons: previous, next
    const handleModalImage = (str) => {
        if(str === "+"){
            if(modalImgNumber === mainModalImg.length-1){
                setModalImgNumber(0)
            }else{
                setModalImgNumber(modalImgNumber + 1)
            }
        }else{
            if(modalImgNumber === 0){
                setModalImgNumber(mainModalImg.length-1)
            }else{
                setModalImgNumber(modalImgNumber - 1)
            }
        }
        console.log(modalImgNumber)
    }
    // With thumnails images
    const handleModalImage2 = (idx) => {
        setModalImgNumber(idx)
    }

    const handleMenuStatus = () => {
        setMenuState(!menuState)
    }

    return (
        <div className='main-container'>
            <Header
                cartState={cartState}
                handleCartState={handleCartState}
                cart={cart}
                clearCart={clearCart}
                menuState={menuState}
                handleMenuStatus={handleMenuStatus}
            >
            </Header>
            <div className='images-description-container'>
                <Images 
                    images={images}
                    imgNumber={imgNumber} 
                    thumbnails={thumbnailImages} 
                    handleMainImage={handleMainImage}
                    handleModalState={handleModalState}
                    handleNumber={handleNumber}
                >
                    
                </Images>
                <Description 
                    addToCart={addToCart}
                    handleQuantity={handleQuantity}
                    quantity={productQuantity}
                    product={data}
                >
                </Description>
            </div>
            {modalState && 
                <Modal
                    images={images}
                    modalThumbnails={modalThumbnails}
                    handleModalState={handleModalState}
                    modalState={modalState}
                    mainModalImg={mainModalImg}
                    handleModalImg={handleModalImage}
                    handleModalImage2={handleModalImage2}
                    modalImgNumber={modalImgNumber}
                >
                </Modal>
            }

            { menuState && 
                <MobileMenu
                    handleMenuStatus={handleMenuStatus}
                    menuState={menuState}
                >
                </MobileMenu>
            }

        </div>
    );
}

export default Main;
