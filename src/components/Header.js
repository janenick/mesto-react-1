import React from 'react';
import logoPath from '../images/header/logo.svg';

function Header() {
  return (
    <header className='header'>
      <img src={logoPath} alt='Логотип сайта' className='logo' />
      <h1 className='visually-hidden'>
        Место: интерактивный сервис для добавления фотографий
      </h1>
    </header>
  );
}

export default Header;