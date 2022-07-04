import React, { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import images from '../../services/photos';

import './slide.css';

const GalleryProjects = () => {
  const responsive = {
      0: { items: 1 },
      568: { items: 2 },
      1024: { items: 3 },
  };

  const [project, setProjects] = useState([]);

  async function fetchProjects() {
    const response = await fetch('https://api.github.com/users/diegotimao/repos');
    const responseJson = await response.json();
    const repositoryes = responseJson;
    
    const repos = repositoryes.map((repo) => {
      if (repo.description !== null && repo.language !== null) {
        repo = {
          name: repo.name,
          description: repo.description,
          visibility: repo.visibility,
          url: repo.html_url,
          language: repo.language,
          created: repo.created_at,
        }
      }
      return repo;
    });
    setProjects(repos);
  }

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleClick = (url) => {
    window.open(url, '_blanck');
  }

  const projectViwer = project.slice(1, 5);
  
  const items = projectViwer.map((item, index) => (
    <div className="item" data-value="1">
      <img src={ images[index].url } alt="ImageProject" />
      <div className="card-info">
        <span>{item.language}</span>
        <strong>{item.name}</strong>
        <p>
        { `${item.description.substring(0, 100)} ...` }
        </p>
      </div>
      <div className="card-action">
        <p>{ item.created.substring(0,10).split('-').reverse().join('-') }</p>
        <button
          type="button"
          onClick={ () => handleClick(item.url)}
        >Ver código</button>
      </div>
    </div>
  ));

  return (
    <div className="slide-projects-container">
      <div className="slide-projects-content">
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          controlsStrategy="alternate"
          paddingLeft={30}
          infinite={true}
          autoPlay={true}
          // autoPlayStrategy={'none'}
          animationEasingFunction={'ease'}
          animationDuration={2000}
          autoHeight={false}
          autoWidth={false}
        />
      </div>
    </div>
  );
}

export default GalleryProjects;