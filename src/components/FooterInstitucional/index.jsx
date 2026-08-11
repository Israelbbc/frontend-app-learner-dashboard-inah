import React from 'react';
import './FooterInstitucional.scss';

// IMPORTANTE: Cuando tengas los recursos gráficos, guárdalos en una carpeta 'assets' 
// dentro de tu MFE y descomenta estas líneas:
import logoInahBlanco from '../../assets/Ollin-blanco.png';
import logosGobierno from '../../assets/cultura_inah.png';

const FooterInstitucional = () => {
  return (
    <footer className="footer-inah">
      <div className="container">
        <div className="row">
          
          {/* Columna 1: Sobre el Portal */}
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="footer-title">SOBRE EL AULA INAH</h5>
            <ul className="footer-links links-left">
              <li>
                <a href="/faq">
                  <span className="icon-chevron">›</span> Preguntas frecuentes
                </a>
              </li>
              <li>
                <a href="mailto:datos@inah.gob.mx">
                  <span className="icon-chevron">›</span> Contacto aula@inah.gob.mx
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 2: Otros Portales */}
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="footer-title">OTROS PORTALES DEL INAH</h5>
            <ul className="footer-links links-right">
              <li>
                <a href="https://www.inah.gob.mx" target="_blank" rel="noopener noreferrer">
                  INAH <span className="icon-chevron">›</span>
                </a>
              </li>
              <li>
                <a href="https://repositorio.inah.gob.mx" target="_blank" rel="noopener noreferrer">
                  Repositorio INAH <span className="icon-chevron">›</span>
                </a>
              </li>
              <li>
                <a href="https://revistas.inah.gob.mx" target="_blank" rel="noopener noreferrer">
                  Revistas INAH <span className="icon-chevron">›</span>
                </a>
              </li>
              <li>
                <a href="https://lugares.inah.gob.mx" target="_blank" rel="noopener noreferrer">
                  Lugares INAH <span className="icon-chevron">›</span>
                </a>
              </li>
              <li>
                <a href="https://investigacion.inah.gob.mx" target="_blank" rel="noopener noreferrer">
                  Investigación INAH <span className="icon-chevron">›</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Información Institucional y Logo */}
          <div className="col-md-4 text-center text-md-center">
            {/* Reemplazar este div con la etiqueta img cuando tengas el SVG */}
            <img src={logoInahBlanco} alt="Logo INAH" className="logo-main" />
	    {/*<div style={{ border: '2px dashed white', padding: '30px', display: 'inline-block', marginBottom: '10px' }}>
              [ LOGO INAH BLANCO ]
            </div> */}
            
            <h6>Instituto Nacional de Antropología e Historia</h6>
            <p>
              Hamburgo 135, Colonia Juárez, Alcaldía Cuauhtémoc<br />
              CP 06600 Ciudad de México, México
            </p>
          </div>
          
        </div>

        {/* Separador */}
        <hr className="footer-divider" />

        {/* Sección Inferior: Logos de Gobierno */}
        <div className="row text-center">
          <div className="col-12">
            {/* Reemplazar este div con la etiqueta img cuando tengas los logos agrupados */}
            <img src={logosGobierno} alt="Secretaría de Cultura e INAH" className="logos-gov" />
	    {/*<div style={{ border: '1px dashed white', padding: '20px', display: 'inline-block' }}>
              [ LOGOS CULTURA / INAH ]
            </div>*/}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterInstitucional;
