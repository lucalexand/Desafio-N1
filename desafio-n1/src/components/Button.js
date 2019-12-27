import React from 'react';
import '../Styles/Button.scss';

function Button({value = "Compra Ae", frete,  updateCart, showModal, showModal2}){
    function onClick() {
        if(!frete) {
            updateCart();
            showModal();
        } else {
            showModal2();
        }
    }
    return(
        <div className="Button" onClick={onClick}>
            {value}
        </div>
    );
}

export default Button;