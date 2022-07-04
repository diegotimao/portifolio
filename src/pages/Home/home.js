import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

import Banner from '../../components/Banner/Banner';
import Sobre from '../../components/Sobre/sobre';
import Tecks from '../../components/Tecks/teck';
import Trybe from '../../components/Trybe/Trybe';
import Projects from '../../components/Projects/Projects';
import Contato from '../../components/Contato/contato';
import Footer from '../../components/Footer/Footer';

function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])

  return (
    <main>
      <Banner />
      <Sobre />
      <Tecks />
      <Trybe />
      <Projects />
      <Contato />
      <Footer />
    </main>
  );
}

export default Home; 