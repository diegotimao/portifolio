import React, { useContext, useEffect, useState } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import { AuthContext } from '../../provider/auth';
import projects from '../../services/projects';
import { Github } from 'lucide-react';
import './styles.css';
import { Sofa } from 'lucide-react';

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

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, [])

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
                    <Github />
                    Ver no GitHub</button>
                  <button type="button" onClick={() => handleClick(project.urlPreviwer)}>
                    <Sofa />
                    Demo ao Vivo</button>
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