import React, { useContext, useEffect, useState } from "react";
import './sobre.css';
import AvatarSobre from '../../assets/avatar-sobre.svg';
import cetepIcon from '../../assets/cetep.svg';
import iconTrybe from '../../assets/icontrybe.svg';
import { AuthContext } from "../../provider/auth";
import Motivation from "../Motivation";

function Sobre() {

  const { theme } = useContext(AuthContext);
  const [themeAplication, setTeamAplication] = useState('');

  useEffect(() => {
    if (theme === 'lithe') return setTeamAplication('sobre-container-lithe-theme');
    return setTeamAplication('sobre-container-dark-theme');
  }, [theme]); 

  return (
    <section id="sobre" className={ themeAplication }>
      <div className="sobre-content">
        <div className="avatar-user">
          <img src={ AvatarSobre } alt="Avatar-sobre" />
        </div> 
        <div className="sobre-info">
          <h1>Vou contar um pouco sobre mim</h1>

          <p>Me chamo Diego, tenho 25 anos e moro em Paulo Afonso na Bahia. 
            Sou formado em Técnico de Informática, já atuei na área de suporte
            a Ti. Atualmente estudante de Desenvolvimento Web na Trybe.</p>

          <strong>Para mim a tecnologia é um mar de possibilidades, 
          com ela tenho o poder para dar vida as idéias e soluções.
          E saber que as minhas linhas de código podem impactar
          diretamente na vida das pessoas é muito gratificante.</strong>

          <div className="oraganization">
            <div className="organizatios-icon">
              <img src={ cetepIcon } alt="Cetep icon" data-aos="fade-down" data-aos-duration="600"/>
              <img src={ iconTrybe } alt="Trybe icon" data-aos="fade-down" data-aos-duration="600"/>
            </div>
          </div>
        </div>
      </div>
      <Motivation />
    </section>
  )
}

export default Sobre;