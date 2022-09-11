import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './header.css';
import Logo from '../../assets/logo.png';
import MenuIcon from '../../assets/menu.svg';

function Header() {
  return (
    <nav className="header-container">
      <div className="header-content">
        <img src={Logo} alt="icon" />
        <ul className="nav-list">
          <li><AnchorLink className='link' href='#sobre'>Sobre</AnchorLink></li>
          <li><AnchorLink className='link' href='#tecks'>Conhecimentos</AnchorLink></li>
          <li><AnchorLink className='link' href='#projetos'>Projetos</AnchorLink></li>
          <li><AnchorLink className='link' href='#contato'>Contato</AnchorLink></li>
        </ul>
        <button type="button" className="btn-toggle">
          <img src={MenuIcon} alt="Botão menu" />
        </button>
      </div>
    </nav> 
  );
}

export default Header;