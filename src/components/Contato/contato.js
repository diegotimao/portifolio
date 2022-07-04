import React from 'react';

import './contato.css';
import emailIcon from '../../assets/mail.svg';
import usersIcon from '../../assets/users.svg';
import fileIcon from '../../assets/file-minus.svg';

function Contato() {
  return (
    <div className="contato-container">
      <div className="contato-content">
        <div className="contato-info">
          <h1>Contato</h1>
          <p>Preencha os dados abaixo para entrar em contato comigo!</p>
        </div>
        <form class="form" action="https://formsubmit.co/diegotimao1104@gmail.com" method="POST">
            <input
              type="hidden"
              name="_autoresponse"
              value="Recebemos sua mensagem, obrigado pelo contato e logo responderemos!"
            />
            <input type="hidden" name="_captcha" value="false" />
            <div class="icon-input inputIcon">
              <input type="text" name="name" placeholder="Nome e sobrenome" required/>
              <img src={ usersIcon } aria-hidden="true" alt="Icone User" />
            </div>
            <div class="icon-input inputIcon">
                <input type="text" name="email" placeholder="Email" required />
                <img src={ emailIcon } aria-hidden="true" alt="Icone User" />
            </div>
            <div class="icon-input inputIcon">
                <input type="text" name="assunto" placeholder="Assunto" required />
                <img src={ fileIcon } aria-hidden="true" alt="Icone User" />
            </div>
            
            <textarea name="mensagem" id="mensagem" cols="30" rows="6" placeholder="Mensagem" required></textarea>

            <button class="btn-submit" type='submit'>Enviar</button>
        </form>
        </div>
      </div>
  );
}

export default Contato;