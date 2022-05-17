import {
  NavLink
} from 'react-router-dom';
import { useRef, useEffect } from 'react';
import logo from '../../assets/img/logo.png';
import '../../styles/css/Header.css';
import Search from './Search';

const Header = () => {

  const documentReady = () => {
    const header = document.querySelector('.header');
    const headerNav = document.querySelector('.header-nav');

    const headerNavMenuIconContainer = document.getElementById('headerNavMenuIconContainer');
    const headerNavMenuCloseIconContainer = document.getElementById('headerNavMenuCloseIconContainer');
    const headerNavMenuLinkList = document.querySelector('.header-nav__menu-link-list');
    const headerNavMenuLinks = [...document.querySelectorAll('.header-nav__menu-link')];

    const documentScroll = () => {
      header.classList.toggle('header--scroll', window.scrollY > 0);
      headerNav.classList.toggle('header-nav--scroll', window.scrollY > 0);
    };

    const openMenu = () => {
      headerNavMenuLinkList.classList.add('header-nav__menu-link-list--open');
    };

    const closeMenu = () => {
      headerNavMenuLinkList.classList.remove('header-nav__menu-link-list--open');
    };

    document.addEventListener('scroll', documentScroll);
    headerNavMenuIconContainer.addEventListener('click', openMenu);
    headerNavMenuCloseIconContainer.addEventListener('click', closeMenu);
    headerNavMenuLinks.forEach((element) => {
      element.addEventListener('click', closeMenu);
    });
  };
  document.addEventListener('DOMContentLoaded', documentReady);

  const headerNavThemeIconContainer = useRef();

  const toggleTheme = () => {
    const body = document.querySelector('.body');

    body.classList.toggle('body--light');
    headerNavThemeIconContainer.current.classList.toggle('header-nav__theme-icon-container--active');

    if (body.classList.contains('body--light')) {
      localStorage.setItem('darkMode', 'false');
    } else {
      localStorage.setItem('darkMode', 'true');
    }
  };

  useEffect(() => {
    if (localStorage.getItem('darkMode') === 'true' || localStorage.getItem('darkMode') === null) {
      document.querySelector('.body').classList.remove('body--light');
      headerNavThemeIconContainer.current.classList.remove('header-nav__theme-icon-container--active');
    } else {
      document.querySelector('.body').classList.add('body--light');
      headerNavThemeIconContainer.current.classList.add('header-nav__theme-icon-container--active');
    }
  }, []);

  return (
    <header className="header animate__animated animate__fadeIn">
      <nav className="header-nav">
        <div className="header-nav__container">
          <div className="header-nav__link-container">
            <NavLink to="/" className="header-nav__link-logo-container">
              <img src={logo} alt="Logo Web" className="header-nav__link-logo" />
            </NavLink>
            <ul className="header-nav__menu-link-list">
              <li className="header-nav__menu-link-item">
                <NavLink to="/estrenos" className="header-nav__menu-link">Estrenos</NavLink>
              </li>
              <li className="header-nav__menu-link-item">
                <a href="https://www.linkedin.com/in/elliotgaramendi/" className="header-nav__menu-link header-nav__menu-link--active" target="_blank" rel="noopener noreferrer">Elliot</a>
              </li>
              <li className="header-nav__menu-link-item header-nav__menu-close-icon-container" id="headerNavMenuCloseIconContainer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" className="header-nav__menu-close-icon" >
                  <path
                    d="M9.172 16.242 12 13.414l2.828 2.828 1.414-1.414L13.414 12l2.828-2.828-1.414-1.414L12 10.586 9.172 7.758 7.758 9.172 10.586 12l-2.828 2.828z">
                  </path>
                  <path
                    d="M12 22c5.514 0 10-4.486 10-10S17.514 2 12 2 2 6.486 2 12s4.486 10 10 10zm0-18c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8z">
                  </path>
                </svg>
              </li>
            </ul>
          </div>
          <div className="header-nav__form-theme-menu-container">
            <Search />
            <button
              className="header-nav__theme-icon-container"
              ref={headerNavThemeIconContainer}
              onClick={toggleTheme}
            >
              <span className="header-nav__theme-icon">🌚</span>
              <span className="header-nav__theme-icon">🌞</span>
            </button>
            <figure className="header-nav__menu-icon-container" id="headerNavMenuIconContainer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" className="header-nav__menu-icon">
                <path d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z"></path>
              </svg>
            </figure>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;