import React from 'react';
import { useParams } from 'react-router-dom';

// import { Container } from './styles';

function Pojects() {
  const { id } = useParams();

  return (
    <h1>Meus Projetos { id }</h1>
  );
}

export default Pojects;