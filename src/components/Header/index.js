import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './header.css';
import Logo from '../../assets/logo.png';
import MenuIcon from '../../assets/menu.svg';

function Header() {

  const [toggle, setTogle] = useState('nav-list-toggle');

  const handleClick = () => {
    if (toggle === 'nav-list') {
      return setTogle('nav-list-toggle')
    }
    setTogle('nav-list')
  }

  return (
    <nav className="header-container">
      <div className="header-content">
        <div className="menu">
          <img src={Logo} alt="icon" />
          <ul className="menu-desk"> 
            <li><AnchorLink className='link' href='#sobre'>Sobre</AnchorLink></li>
            <li><AnchorLink className='link' href='#tecks'>Conhecimentos</AnchorLink></li>
            <li><AnchorLink className='link' href='#projetos'>Projetos</AnchorLink></li>
            <li><AnchorLink className='link' href='#contato'>Contato</AnchorLink></li>
          </ul>
          <button type="button" className="btn-toggle" onClick={ () => handleClick()}>
            <img src={MenuIcon} alt="Botão menu" />
          </button>
        </div>
        <ul className={toggle} >
          <AnchorLink className='link' href='#sobre'><li onClick={() => handleClick()}>Sobre</li></AnchorLink>
          <AnchorLink className='link' href='#tecks'><li onClick={() => handleClick()}>Conhecimentos</li></AnchorLink>
          <AnchorLink className='link' href='#projetos'><li onClick={() => handleClick()}>Projetos</li></AnchorLink>
          <AnchorLink className='link' href='#contato'><li onClick={() => handleClick()}>Contato</li></AnchorLink>
        </ul>
      </div>

      
      
    </nav> 
  );
}

export default Header;