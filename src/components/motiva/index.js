import React from 'react';

import motivationImage from '../../assets/motivation.svg';
import './styles.css';

function motiva() {
  return (
    <section className="my-container">
      <div className="my-content">
        <div className="my-sobre">
          <h1>Faz parte de <span>mim</span>!</h1>
          <p>Amo um <span>cafezinho</span> quente e uma conversa animada com a pessoa certa,
            tenho a sorte de <span>morar</span> em uma ilha rodeada de água doce para onde vou 
            sempre relaxar e colocar meus pensamentos em ordem. E por fim, o <span>futebol </span>  
            é a minha paixão, onde se aprende a cada dia a lição de nunca desistir.
          </p>
        </div>
        <div className="photo-image">
          <img src={motivationImage} alt="ImageMotivation" data-aos="zoom-in"/>
        </div>
      </div>
    </section>
  );
}

export default motiva;