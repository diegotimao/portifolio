import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/auth';
import projects from '../../services/projects';
import eyeIcon from '../../assets/eye1.svg';
import ComandIcon from '../../assets/command1.svg';
import './styles.css';

function CardList() {
  const { theme } = useContext(AuthContext);
  const [themeAplication, setTeamAplication] = useState('');

  useEffect(() => {
    if (theme === 'lithe') return setTeamAplication('container-lithe-theme');
    return setTeamAplication('container-dark-theme');
  }, [theme]);

  const handleClick = (url) => {
    window.open(url, '_blanck');
  }

  return (
    <section id="projetos" className={themeAplication}>
      <div className="content">
        <div className="info-project">
          <h1>Projetos</h1>
          <strong>Confira alguns dos projetos que me orgulho em ter feito</strong>
        </div>
        <ul className="project-list">
          {projects.map((project) => (
            <li className="project-card">
              <div className="card-info" data-aos="zoom-in-up" >
                <h1>{project.title}</h1>
                <span>{project.description}</span>
                <div className="btn">
                  <button type="button" onClick={() => handleClick(project.urlCode)}>
                    <img src={ComandIcon} alt="Icon Comand" />
                    Code</button>
                  <button type="button" onClick={() => handleClick(project.urlPreviwer)}>
                    <img src={eyeIcon} alt="Icon Ver" />
                    Preview</button>
                </div>
              </div>
              <div className="card-img" >
                <img src={project.image} alt={project.title} data-aos="zoom-in-up" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default CardList;