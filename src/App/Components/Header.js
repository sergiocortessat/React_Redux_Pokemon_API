import React from 'react';
import logo from '../../Assets/logo.svg';
import '../../Styles/Header.scss';

const Header = () => (
  <div className="searchContainer" data-testid="header">
    <img src={logo} alt="none" />
  </div>
);

export default Header;
