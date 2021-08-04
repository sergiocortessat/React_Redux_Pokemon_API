/* eslint-disable react/prop-types */
import React from 'react';

const Button = ({ type, handleClick }) => (
  <button
    type="button"
    className="type-filter-item"
    style={{ backgroundColor: type.color }}
    onClick={(e) => handleClick(e.target.innerText)}
  >
    {type.name}
    {' '}
  </button>
);

export default Button;
