import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ type, handleClick }) => {
  const style = {
    backgroundColor: type.color,
    color: type.text,
  };
  return (
    <button
      type="button"
      className="type-filter-item"
      style={style}
      data-testid="type-filter-item"
      onClick={(e) => handleClick(e.target.innerText)}
    >
      {type.name}
      {' '}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.objectOf(PropTypes.string).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
