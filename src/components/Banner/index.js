import React from "react";

import './banner.css';
import Avatar from '../../assets/avatar.svg';
import bottonIcon from '../../assets/bottonIcon.svg';
import Cloud from '../../assets/cloud.svg';
import url from '../../assets/curriculo.pdf'

function Banner() {

  const getVitae = () => {
    return  window.open(url, 'Download');
  }

  return (
    <section className="banner-container">
      <div className="banner-content">
        <div className="sobre-user">
          <div className="user-description">
            <h1 data-aos="zoom-in">Diego Cavalcanti</h1>
            <strong data-aos="zoom-in">Desenvolvedor Front-end Jr</strong>
            <div className="user-social">
              <button
                type="button" 
                onClick={() => getVitae()}
                className="btn-github" 
                data-aos="zoom-in"
              >
                <img 
                    src={ Cloud } 
                    alt="IconDownload" 
                    className="icon-social" 
                  />
                  <span>Baixar curriculun</span>
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
    </section>
  )
}

export default Banner;
