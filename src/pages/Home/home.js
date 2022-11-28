import React from 'react';
import Banner from '../../components/Banner';
import Sobre from '../../components/Sobre';
import Tecks from '../../components/Tecks';
import Projetos from '../../components/projects';
import Header from '../../components/Header';
import Contato from '../../components/Contato';
import Footer from '../../components/Footer';

function Home() {
  

  return (
    <main>
      <Header />
      <Banner />
      <Sobre />
      <Tecks />
      <Projetos />
      <Contato />
      <Footer />
    </main>
  );
}

export default Home; 