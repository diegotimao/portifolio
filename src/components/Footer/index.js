import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/auth';
import './footer.css';

function Footer() {

  const { theme } = useContext(AuthContext);
  const [themeAplication, setTeamAplication] = useState('');

  useEffect(() => {
    if (theme === 'lithe') return setTeamAplication('footer-container-lithe-theme ');
    return setTeamAplication('footer-container-dark-theme');
  }, [theme]); 

  return (
    <section className={ themeAplication }>
      <div className="footer-content">
        <strong>Desenvolvido por Diego Cavalcanti</strong>
      </div>
    </section>
  );
}

export default Footer;