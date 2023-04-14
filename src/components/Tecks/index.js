import React, { useContext, useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { AuthContext } from "../../provider/auth";
import tecks from '../../services/tecks';
import './teck.css';

function Techs() {
  const { theme } = useContext(AuthContext);
  const [themeAplication, setTeamAplication] = useState('');

  useEffect(() => {
    if (theme === 'lithe') return setTeamAplication('teck-container-lithe-theme');
    return setTeamAplication('teck-container-dark-theme');
  }, [theme]);

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, [])

  return (
    <section id="tecks" className={themeAplication}>
      <div className="teck-content">
        <div className="teck-info">
          <h1>Tecnologias</h1>
          <strong>Algumas das tecnologias em que tenho conhecimento no mundo da programação.</strong>
        </div>
        <div className="teck-list">
          <div className="list">
            {tecks.map((teck) => (
              <div key={teck.teckname} className="teck-item" data-aos="fade-right">
                <img src={teck.icon} alt={teck.teckname} />
                <div className="teck-info-project">
                  <h2>{teck.teckname}</h2>
                  <strong>{teck.description}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Techs;