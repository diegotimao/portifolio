import React, { useContext, useEffect, useState } from 'react';
import Aos from "aos";
import './banner.css';
import Avatar from '../../assets/avatar.svg';
import bottonIcon from '../../assets/bottonIcon.svg';
import Cloud from '../../assets/cloud.svg';
import url from '../../assets/cv-diego-santos.pdf'
import { AuthContext } from '../../provider/auth';

function Banner() {
  const { theme } = useContext(AuthContext);
  const [themeBanner, setThemeBanner] = useState('');

  const getVitae = () => {
    return window.open(url, 'Download');
  }

  useEffect(() => {
    if (theme === 'lithe') return setThemeBanner('banner-container-ligth-theme');
    return setThemeBanner('banner-container-black-theme')
  }, [theme]);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])

  return (
    <section className={themeBanner}>
      <div className='circles'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="banner-content">
        <div className="sobre-user">
          <div className="user-description">
            <h1 data-aos="zoom-in">Diego Cavalcanti</h1>
            <strong>Desenvolvedor Fullstack Jr.</strong>
            <p style={{"white-space": "pre-line"}}>
              Focado em criar soluções web e otimizar 
              experiências digitais com paixão e inovação.
            </p>
            <div className="user-social">
              <button
                type="button"
                onClick={() => getVitae()}
                className="btn-curriculo"
                data-aos="zoom-in"
              >
                <img
                  src={Cloud}
                  alt="IconDownload"
                  className="icon-social"
                />
                <span>Veja meu currículo</span>
              </button>
            </div>
          </div>
          <div className="user-avatar">
            <img src={Avatar} alt="User avatar" data-aos="fade-right" />
          </div>
        </div>
        <div className="btn-bottom">
          <img src={bottonIcon}
            alt="bottonIcon"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="100"
          />
        </div>
      </div>
    </section>
  )
}

export default Banner;
