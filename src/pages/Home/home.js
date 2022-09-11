import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

import Banner from '../../components/Banner';
import Sobre from '../../components/Sobre';
import Tecks from '../../components/Tecks';
import Projetos from '../../components/projects';
import Header from '../../components/Header';
import Contato from '../../components/Contato';
import Footer from '../../components/Footer';
import Motiva from '../../components/motiva';

function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])

  return (
    <main>
      <Header />
      <Banner />
      <Sobre />
      <Motiva />
      <Tecks />
      <Projetos />
      <Contato />
      <Footer />
    </main>
  );
}

export default Home; 