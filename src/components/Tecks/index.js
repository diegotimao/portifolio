import React from "react";
import tecks from '../../services/tecks';
import './teck.css';
 
function Tecks() {
  return (
    <section id="tecks" className="teck-container">
      <div className="teck-content">
        <div className="teck-info">
          <h1>Tecks</h1>
          <strong>Um pouco sobre minhas tecnologias de estudo no mundo da programação.</strong>
        </div>
        <div className="teck-list">
          <div className="list">
            {tecks.map((teck) => (
              <div key={ teck.teckname } className="teck-item" data-aos="fade-right">
                <img src={ teck.icon } alt={ teck.teckname } />
                <div className="teck-info-project">
                  <h2>{ teck.teckname }</h2>
                  <strong>{ teck.description }</strong>
                </div>
              </div>
            ))} 
          </div>
        </div>
      </div>
    </section>
  )
} 

export default Tecks;