import React from 'react';
import '../Styles/Button.scss';

function Button({value = "Compra Ae", updateCart}){
    return(
        <div className="Button" onClick={updateCart}>
            {value}
        </div>
    );
}

export default Button;