import React, { useContext, useEffect, useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './header.css';
import Logo from '../../assets/logo.png';
import MenuIcon from '../../assets/menu.svg';
import { AuthContext } from '../../provider/auth';
import SunIcon from '../../assets/sun.svg';
import MonICon from '../../assets/moon.svg';


function Header() {

  const { theme, setTheme } = useContext(AuthContext);
  const [toggle, setTogle] = useState('nav-list-toggle');
  const [IconTheme, setIconTheme] = useState(MonICon);
  const [themeHeader, setThemeHeader] = useState('');

  const handleClick = () => {
    if (toggle === 'nav-list') {
      return setTogle('nav-list-toggle')
    }
    setTogle('nav-list')
  }

  const onChangeTheme = () => {
    if (theme === 'lithe') {
      setIconTheme(SunIcon);
      return setTheme('dark')
    };
    setIconTheme(MonICon);
    return setTheme('lithe');
  }

  useEffect(() => {
    if (theme === 'lithe') return setThemeHeader('header-container-ligth-theme');
    setThemeHeader('header-container-black-theme');
  }, [theme])

  return (
    <nav className={themeHeader}>
      <div className="header-content">
        <div className="menu">
          <img src={Logo} alt="icon" />
          <ul className="menu-desk">
            <li><AnchorLink className='link' href='#sobre'>Sobre</AnchorLink></li>
            <li><AnchorLink className='link' href='#tecks'>Tecnologias</AnchorLink></li>
            <li><AnchorLink className='link' href='#projetos'>Projetos</AnchorLink></li>
            <li><AnchorLink className='link' href='#contato'>Contato</AnchorLink></li>
            <li>
              <button className='btn-theme' type='button' onClick={() => onChangeTheme()}>
                <img src={IconTheme} alt="Icon Theme" />
              </button>
            </li>
          </ul>
          <div className='togle'>
            <button className='btn-theme' type='button' onClick={() => onChangeTheme()}>
              <img src={IconTheme} alt="Icon Theme" />
            </button>
            <button type="button" className="btn-toggle" onClick={() => handleClick()}>
              <img src={MenuIcon} alt="Botão menu" />
            </button>
          </div>
        </div>
        <ul className={toggle} >
          <AnchorLink className='link' href='#sobre'><li onClick={() => handleClick()}>Sobre</li></AnchorLink>
          <AnchorLink className='link' href='#tecks'><li onClick={() => handleClick()}>Tecnologias</li></AnchorLink>
          <AnchorLink className='link' href='#projetos'><li onClick={() => handleClick()}>Projetos</li></AnchorLink>
          <AnchorLink className='link' href='#contato'><li onClick={() => handleClick()}>Contato</li></AnchorLink>
        </ul>
      </div>
    </nav>
  );
}

export default Header;