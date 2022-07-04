import React, { useState } from 'react';

import './header.css';
import Logo from '../../assets/logo.svg';
import IconBtn from '../../assets/btn-menu.svg';

function Header() {
  const [btnToggle, setBtnToggle] = useState(false)

  function handleSetState(params) {
    setBtnToggle(params)
  }

  function handClickMenu() {
    if (btnToggle) return handleSetState(false)
    
    handleSetState(true)
  }

  return (
    <div className="header-container">
      <div className="header-content">
        <div className="header-nav">
          <img src={ Logo } alt="LogoIcon" className="icon-logo" />
          <div className='menu-list-web'>
            <div className="menu-list-web">
              <ul>
                <li>Sobre</li>
                <li>Portifólio</li>
                <li>Projetos</li>
              </ul>
            </div>
          </div>
          <button
            type="button"
            className="btn-menu"
            onClick={ () => handClickMenu() }
          >
            <img src={ IconBtn } alt="IconBtn" className="icon-btn" />
          </button>
        </div>
      </div>
      <div className={ (btnToggle) ? "menu-toglle" : "menu-toglle-disable" }>
        <div className="menu-list">
          <ul>
            <li>Sobre</li>
            <li>Portifólio</li>
            <li>Projetos</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;