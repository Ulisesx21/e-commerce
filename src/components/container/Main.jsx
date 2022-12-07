import React, { useState } from 'react';
import Header from '../pure/Header';
import Description from '../pure/Description';
import Images from '../pure/Images';
import Modal from '../pure/Modal';
import { data } from "../../data/data"
import "../../styles/Main.css"
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

    const changeQuantity = (str) => {
            return str === "+" 
            ? 
            setProductQuantity(productQuantity + 1) 
            : 
            productQuantity === 0 
                ? null 
                : setProductQuantity(productQuantity - 1)  
    }

    const changeMainImage = (idx) => {
        setImgNumber(idx)
    }

    const changeNumber = (str) => {
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

    const changeCartState = () => {
        setCartState(!cartState)
    }

    const changeModalState = () => {
        setModalState(!modalState)
    }

    // With Icons: previous, next
    const changeModalImage = (str) => {
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
    const changeModalImage2 = (idx) => {
        setModalImgNumber(idx)
    }

    const changeMenuStatus = () => {
        setMenuState(!menuState)
    }

    
    

    return (
        <div className='main-container'>
            <Header
                cartState={cartState}
                changeCartState={changeCartState}
                cart={cart}
                clearCart={clearCart}
                menuState={menuState}
                changeMenuStatus={changeMenuStatus}
            >
            </Header>
            <div className='images-description-container'>
                <Images 
                    images={images}
                    imgNumber={imgNumber} 
                    thumbnails={thumbnailImages} 
                    changeMainImage={changeMainImage}
                    changeModalState={changeModalState}
                    changeNumber={changeNumber}
                >
                    
                </Images>
                <Description 
                    addToCart={addToCart}
                    changeQuantity={changeQuantity}
                    quantity={productQuantity}
                    product={data}
                >
                </Description>
            </div>
            {modalState && 
                <Modal
                    images={images}
                    modalThumbnails={modalThumbnails}
                    changeModalState={changeModalState}
                    modalState={modalState}
                    mainModalImg={mainModalImg}
                    changeModalImg={changeModalImage}
                    changeModalImage2={changeModalImage2}
                    modalImgNumber={modalImgNumber}
                >
                </Modal>
            }

            { menuState && 
                <MobileMenu
                    changeMenuStatus={changeMenuStatus}
                    menuState={menuState}
                >
                </MobileMenu>
            }

        </div>
    );
}

export default Main;
