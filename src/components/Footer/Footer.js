import React from 'react';

import './footer.css';
import logoImage from '../../assets/logo.svg';


function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <img src={ logoImage } alt="LogoImage" />
        <strong>Desenvolvido por Diego Cavalcanti</strong>
      </div>
    </div>
  );
}

export default Footer;