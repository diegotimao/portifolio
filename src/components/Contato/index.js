import React from 'react';

import './contato.css';
import contactus from '../../assets/contact.svg';
import linkedinIcon from '../../assets/linkedinIcon.svg';
import whats from '../../assets/whats.svg';

function Contato() {
  const handleClick = (url) => {
    window.open(url, '_blanck');
  }

  return (
    <section id="contato" className="contato-container">
      <div className="contato-content">
        <div className="contact-image">
          <img src={contactus} alt="Contact Img" />
        </div>
        <div className="contact-us">
          <h1>Contato</h1>
          <p>Para dúvidas, sugestões, feedbacks entre outros, basta escolher  uma das opções abaixo. Será um prazer matermos contato.</p>
          <div className="btn-contact">
            <button type="button" onClick={ () => handleClick('https://api.whatsapp.com/send?phone=75992171243')}>
              <img src={whats} alt="Icon Whats" />
              <span>Whatsapp</span>
            </button>
            <button type="button" onClick={ () => handleClick('https://www.linkedin.com/in/diegocti/')}>
              <img src={linkedinIcon} alt="Icon Linkedin" />
              <span>Linkedin</span>
            </button>
            <button type="button" onClick={ () => handleClick('https://github.com/diegotimao')}>Github</button>
          </div>
        </div>
      </div>
    </section >
  );
}

export default Contato;