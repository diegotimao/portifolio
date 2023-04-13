import React, { useContext, useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import './sobre.css';
import AvatarSobre from '../../assets/diego-sobre.png';
import cetepIcon from '../../assets/cetep-icon.png';
import iconTrybe from '../../assets/trybe-icon.png';
import { AuthContext } from "../../provider/auth";
import Motivation from "../Motivation";

function Sobre() {

  const { theme } = useContext(AuthContext);
  const [themeAplication, setTeamAplication] = useState('');

  useEffect(() => {
    if (theme === 'lithe') return setTeamAplication('sobre-container-lithe-theme');
    return setTeamAplication('sobre-container-dark-theme');
  }, [theme]);

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, [])

  return (
    <section id="sobre" className={themeAplication}>
      <div className="sobre-content">
        <div className="avatar-user">
          <img src={AvatarSobre} alt="Avatar-sobre" />
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
              <div className="formacao" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="200" >
                <img src={iconTrybe} alt="Trybe icon" />
                <strong>Formado em Desenvolvimento Web</strong>
              </div>
              <div className="formacao" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="400">
                <img src={cetepIcon} alt="Cetep icon" />
                <strong>Formado em Técnico de Informática</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Motivation />
    </section>
  )
}

export default Sobre;