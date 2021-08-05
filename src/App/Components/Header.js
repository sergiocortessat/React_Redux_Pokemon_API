/* eslint-disable max-len */
/* eslint-disable no-tabs */
/* eslint-disable no-unused-vars */
import { TextField } from '@material-ui/core';
import React from 'react';
import logo from '../../Assets/logo.svg';
import '../../Styles/Header.scss';

const Header = () => (
  <div className="searchContainer">
    <img src={logo} alt="nonso" />
  </div>
);

export default Header;
