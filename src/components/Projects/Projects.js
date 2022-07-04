import React from "react";

import './projects.css';
import githubIcon from '../../assets/icon-github.svg';
// import FolderIcon from '../../assets/folder.svg';
import GalleryProjects from "../slide/slide";

function Projects() {

  const handleClick = (url) => {
    window.open(url, '_blanck');
  }

  return (
    <div className="projects-container">
      <div className="projects-content">
        <div className="projects-info">
          <div className="github">
            <img src={githubIcon} alt="Icon Github" />
            <h1>Github</h1>
          </div>
        </div>
        <div className="list-container">
          <div className="list-content">
            <div className="title">
              <h3>Projetos realizados</h3>
            </div>
              <GalleryProjects />
            <div className="acess-git" data-aos="zoom-in-up">
              <div className="acess-info">
                <p>Você pode também conferir no github, lá estão disponibilizado o código fonte de cada projeto.</p>
              </div>
              <button
                type="button"
                onClick={ () => handleClick('https://github.com/diegotimao') }
              >Acessar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 

export default Projects;