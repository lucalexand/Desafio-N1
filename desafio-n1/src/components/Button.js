import React from 'react';
import '../Styles/Button.scss';

function Button({value = "Compra Ae"}){
    return(
        <div className="Button">
            {value}
        </div>
    );
}

export default Button;