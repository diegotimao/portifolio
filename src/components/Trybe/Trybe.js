import React from "react";
import statusTrybe from '../../services/statusTrybe';
import './trybe.css';
import LogoTrybe from '../../assets/logo-trybe.svg';
import AvatarUser from '../../assets/souTryber.png';

function Trybe() {

  const redirect = () => {
    window.open("https://www.betrybe.com/?utm_medium=cpc&utm_source=google&utm_campaign=Brand&utm_content=ad03_din_h&gclid=Cj0KCQjw4uaUBhC8ARIsANUuDjWCQdzSJDh-KZnMgVu8vPdAAvpC5d1wemC3sznIZrEMSN468I6iDFUaAnQ2EALw_wcB", "_blank");
  }

  return (
    <div className="trybe-container">
      <div className="trybe-content">
        <div className="trybe-logo">
          <img src={ LogoTrybe } alt="LogoTybe" />
        </div>
        <div className="trybe-info">
          <div className="trybe-avatar">
            <img src={ AvatarUser }
              alt="Avatar Boas Vindas"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
            /> 
            <strong>Desenvolvimento de Softwares</strong>
          </div>
          <div className="trybe-description">
            <h1>Boas Vindas a Trybe!</h1>
            <p>A Trybe é uma escola de desenvolvimento web que tem comprometimento genuíno com o sucesso profissional das pessoas estudantes. mais de 1500 horas de formação.</p>
            <h4>Possui 4 módulos que duram 12 meses.</h4>
            <div className="timeline">
              <div className="timeline-info">
                <ul>
                  { statusTrybe.map((status) => (
                    <li key={ status.id }>
                      {/* <strong className="modulo-status">{ status.status }</strong> */}
                      <img 
                        src={ status.img } 
                        alt={ status.name }
                        className="modulo-img"
                        data-aos="zoom-in"
                        data-aos-duration="300"
                      />
                      <strong className="modulo-name">{ status.name }</strong>
                  </li>
                  ))}
                </ul>
              </div>
              <div className="link-trybe">
                <button type="button" onClick={ () => redirect() }>Conheça a trybe</button>
              </div>
            </div> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trybe;