import React, { useState, useEffect } from 'react';
import { Dropdown } from '@openedx/paragon';
import { getConfig } from '@edx/frontend-platform';
import { getAuthenticatedUser } from '@edx/frontend-platform/auth';
import './HeaderInstitucional.scss';

import logoInah from '../../assets/aula-INAH-H_b.png';

const HeaderInstitucional = () => {
  const user = getAuthenticatedUser();
  const config = getConfig();
  
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('Discussion');

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className="header-inah">
      <div className="header-container">
        <div className="brand-section">
          <img src={logoInah} alt="Logo INAH" className="header-logo" />
          <span className="brand-title">AULA VIRTUAL INAH</span>
        </div>
        
        <nav className="nav-section">
          <a href={`${config.LMS_BASE_URL}/courses`}>Explorar Cursos</a>
          
          {user && (
            <>
              {/* Dropdown de Notificaciones */}
              <Dropdown className="notification-dropdown">
                <Dropdown.Toggle id="notification-menu" className="icon-button notification-btn" aria-label="Notificaciones">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                  </svg>
                </Dropdown.Toggle>
                
                <Dropdown.Menu align="right" className="notification-tray">
                  {/* Cabecera con título y engrane como enlace */}
                  <div className="notification-tray-header">
                    <strong>Notifications</strong>
		    <a 
		  	href={`${config.ACCOUNT_MICROFRONTEND_URL || 'http://apps.local.openedx.io:1997/account'}/#notifications`} 
		  	style={{ color: 'inherit', display: 'flex' }}
		  	aria-label="Configuración de notificaciones"
		    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{cursor: 'pointer'}}>
                        <circle cx="12" cy="12" r="3"></circle>
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                      </svg>
                    </a>
                  </div>
                  
                  {/* Pestañas (Tabs) dinámicas */}
                  <div className="notification-tray-tabs">
                    <span 
                      className={activeTab === 'Discussion' ? 'active' : ''} 
                      onClick={() => setActiveTab('Discussion')}
                    >
                      Discussion
                    </span>
                    <span 
                      className={activeTab === 'Updates' ? 'active' : ''} 
                      onClick={() => setActiveTab('Updates')}
                    >
                      Updates
                    </span>
                    <span 
                      className={activeTab === 'Grading' ? 'active' : ''} 
                      onClick={() => setActiveTab('Grading')}
                    >
                      Grading
                    </span>
                  </div>

                  {/* Cuerpo de la bandeja */}
                  <div className="notification-tray-body">
                    <div className="empty-bell-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                        <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                      </svg>
                    </div>
                    <p>No {activeTab.toLowerCase()} notifications yet</p>
                    <small>When you receive notifications they'll show up here</small>
                  </div>
                </Dropdown.Menu>
              </Dropdown>

              {/* Interruptor Modo Claro/Oscuro */}
              <div className="theme-toggle-container">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
                
                <label className="switch">
                  <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
                  <span className="slider round"></span>
                </label>

                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              </div>
            </>
          )}

          {/* Menú de Perfil */}
          {user ? (
            <Dropdown className="user-dropdown">
              <Dropdown.Toggle id="user-profile-menu" className="user-menu-placeholder">
                {user.username}
              </Dropdown.Toggle>
              
              <Dropdown.Menu align="right">
                <Dropdown.Item href={`${config.PROFILE_MICROFRONTEND_URL || 'http://apps.local.openedx.io:1995/profile'}/u/${user.username}`}>
                  Mi Perfil
                </Dropdown.Item>
		<Dropdown.Item href={`${config.ACCOUNT_MICROFRONTEND_URL || 'http://apps.local.openedx.io:1997/account'}/`}>
                  Cuenta
                </Dropdown.Item>
                <Dropdown.Item href={`${config.LMS_BASE_URL}/dashboard`}>
                  Panel de Control
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href={`${config.LMS_BASE_URL}/logout`}>
                  Cerrar Sesión
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <a href={`${config.LMS_BASE_URL}/login`} className="user-menu-placeholder">
              Iniciar Sesión
            </a>
          )}
        </nav>
      </div>
    </header>
  );
};

export default HeaderInstitucional;
