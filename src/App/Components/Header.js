import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.svg';
import '../../Styles/Header.scss';

const Header = () => (
  <Link to="/">
    <div className="searchContainer" data-testid="header">
      <img src={logo} alt="none" />
    </div>
  </Link>
);

export default Header;
