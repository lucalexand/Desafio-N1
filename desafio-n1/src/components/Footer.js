import React from 'react';
import logo from '../Styles/images/logo-n1-white.svg';
import '../Styles/Footer.scss';

function Footer() {
    return(
        <div className="Footer">
            <div className="Footer-logo">
                <img src={logo} className="white-logo" alt="logo" />
            </div>
            <div className="Footer-direitos">
                <p>Agência N1 - Todos os direitos reservados</p>
            </div>
        </div>
    );
}

export default Footer;