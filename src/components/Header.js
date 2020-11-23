import React from 'react';
import logo from '../images/logo.png';
import '../stylesheet/Header.scss';

const Header = () => {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="Rick and Morty logo" />
    </header>
  );
};

export default Header;
