import React, { useContext, useEffect, useState } from 'react';
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

  return (
    <section id="contato" className={themeAplication}>
      <div className="contato-content">
        <div className="contact-image">
          <img src={contactus} alt="Contact Img" />
        </div>
        <div className="contact-us">
          <h1>Contato</h1>
          <p>Para dúvidas, sugestões, feedbacks entre outros, basta escolher  uma das opções abaixo. Será um prazer mantermos contato.</p>
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