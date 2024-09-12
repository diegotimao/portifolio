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
  
  const getYears = new Date();
  const years = getYears.getFullYear();
  const agePerson = years - 1997;

  useEffect(() => {
    if (theme === 'lithe') return setTeamAplication('sobre-container-lithe-theme');
    return setTeamAplication('sobre-container-dark-theme');
  }, [theme]);

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, [])

  return (
    <section id="sobre" className={themeAplication}>
      <div className="sobre-content">
        <div className="avatar-user">
          <img src={AvatarSobre} alt="Avatar-sobre" />
        </div>
        <div className="sobre-info">
          <h1>Vou contar um pouco sobre mim</h1>

          <p>Olá, meu nome é Diego, tenho {agePerson} anos e resido em Paulo Afonso, 
            na Bahia. Sou graduado em Técnico de Informática e tenho 
            experiência prática na área de suporte técnico, onde atuei como jovem aprendiz.</p>

          <h4>Vejo a tecnologia como um vasto campo de possibilidades. Ela me oferece o poder de transformar 
            ideias em soluções concretas. A sensação de saber que minhas linhas de código podem ter um impacto
            positivo na vida das pessoas é extremamente gratificante.</h4>

          <div className="oraganization">
            <div className="organizatios-icon">
              <div className="formacao" data-aos="fade-down">
                <img src={iconTrybe} alt="Trybe icon" />
                <strong>Formado em Desenvolvimento Web pela Trybe</strong>
              </div>
              <div className="formacao" data-aos="fade-down">
                <img src={cetepIcon} alt="Cetep icon" />
                <strong>Formado em Técnico de Informática pelo Cetep</strong>
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