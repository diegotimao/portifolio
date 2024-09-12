import React, { useContext, useEffect, useState } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import { AuthContext } from '../../provider/auth';
import './contato.css';
import contactus from '../../assets/contact.png';
import linkedinIcon from '../../assets/linkedinIcon.svg';
import whats from '../../assets/whats.svg';
import gitHubIcon from '../../assets/github.svg';

function Contato() {
  const handleClick = (url) => {
    window.open(url, '_blanck');
  }

  const { theme } = useContext(AuthContext);
  const [themeAplication, setTeamAplication] = useState('');

  useEffect(() => {
    if (theme === 'lithe') return setTeamAplication('contato-container-lithe-theme');
    return setTeamAplication('contato-container-dark-theme');
  }, [theme]);

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, [])

  return (
    <section id="contato" className={themeAplication}>
      <div className="contato-content">
        <div className="contact-image">
          <img src={contactus} alt="Contact Img" data-aos="zoom-in-up" />
        </div>
        <div className="contact-us">
          <h1>Contato</h1>
          <div className='cantato-description'>
            <p>Adoraria ouvir de você! Se tiver perguntas, sugestões ou quiser conversar sobre tecnologia, entre em contato. Veja abaixo como se conectar comigo.</p>
            <p>Estou ansioso para suas ideias!</p>
          </div>

          <div className="btn-contact">
            <button type="button" onClick={() => handleClick('https://api.whatsapp.com/send?phone=75992171243')}>
              <img src={whats} alt="Icon Whats" />
              <span>Whatsapp</span>
            </button>
            <button type="button" onClick={() => handleClick('https://www.linkedin.com/in/diegocti/')}>
              <img src={linkedinIcon} alt="Icon Linkedin" />
              <span>Linkedin</span>
            </button>
            <button type="button" onClick={() => handleClick('https://github.com/diegotimao')}>
              <img src={gitHubIcon} alt="Github icon" />
              <span>Github</span>
            </button>
          </div>
        </div>
      </div>
    </section >
  );
}

export default Contato;