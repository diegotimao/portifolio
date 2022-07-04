import React from "react";

import './banner.css';
import Avatar from '../../assets/avatar.svg';
import Logo from '../../assets/logo.svg';
import menuHamburguerIcon from '../../assets/btn-menu.svg';
import iconGithub from '../../assets/githubIcon.svg';
import iconInstagram from '../../assets/instagramIcon.svg';
import iconLinkedin from '../../assets/linkedinIcon.svg';
import bottonIcon from '../../assets/bottonIcon.svg';

function Banner() {
  return (
    <div className="banner-container">
      <div className="banner-content">
        <div className="header-nav">
          <img src={ Logo } alt="Logo Icon"  className="logo-icon"/>
          <ul className="menu-list">
            <li>Home</li>
            <li>Sobre</li>
            <li>Projetos</li>
            <li>Contato</li>
          </ul>
          <span className="menu-hamburguer">
            <img src={ menuHamburguerIcon } alt="Icon menu" />
          </span>
        </div>
        

        <div className="sobre-user">
          <div className="user-description">
            <h1 data-aos="zoom-in">Diego Cavalcanti</h1>
            <strong data-aos="zoom-in">Desenvolvedor FullStack Jr</strong>
            <div className="user-social">
              <button className="btn-github" data-aos="zoom-in">
                <img 
                  src={ iconGithub } 
                  alt="iconGithub" 
                  className="icon-social" 
                />
              </button>
              <button className="btn-instagram" data-aos="zoom-in">
                <img src={ iconInstagram } alt="iconInstagram" className="icon-social"/>
              </button>
              <button className="btn-linkedin" data-aos="zoom-in">
                <img src={ iconLinkedin } alt="iconLinkedin" className="icon-social"/>
              </button>
            </div>
          </div>

          <div className="user-avatar">
            <img src={ Avatar } alt="User avatar" data-aos="fade-right" />
          </div>
        </div>

        <div className="btn-bottom">
          <img src={ bottonIcon }
            alt="bottonIcon"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="100"
          />
        </div> 
      </div>
    </div>
  )
}

export default Banner;
