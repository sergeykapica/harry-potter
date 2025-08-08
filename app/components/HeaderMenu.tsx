'use client';

import { useState } from 'react';

const HeaderMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <>
      <nav
        className={`
          ${isMenuOpen ? 'active' : ''}
          absolute top-full -mt-6 inset-x-0 py-7 bg-black/50 
          lg:mt-0 lg:static lg:py-0 lg:bg-transparent lg:block
        `}
        id="menu"
      >
        <ul className="header__menu">
          <li><a href="#!">Главная</a></li>
          <li><a href="#!">Хогвартс</a></li>
          <li><a href="#!">Факультеты</a></li>
          <li><a href="#!">Преподаватели</a></li>
          <li><a href="#!">Контакты</a></li>
        </ul>
      </nav>

      <div
        className={`burger cursor-pointer lg:hidden ${isMenuOpen ? 'active' : ''}`}
        id="burger"
        onClick={toggleMenu}
      >
        <span className="block w-6 h-0.5 bg-white my-1 transition-all duration-300"></span>
        <span className="block w-6 h-0.5 bg-white my-1 transition-all duration-300"></span>
        <span className="block w-6 h-0.5 bg-white my-1 transition-all duration-300"></span>
      </div>
    </>
  );
};

export default HeaderMenu;