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
      data-testid="button"
      onClick={(e) => handleClick(e.target.innerText)}
    >
      {type.name}
      {' '}
    </button>
  );
};
Button.defaultProps = {
  type: {
    name: '',
    color: '',
    text: '',
  },
  handleClick: () => {},
};

Button.propTypes = {
  type: PropTypes.objectOf(PropTypes.string),
  handleClick: PropTypes.func,
};

export default Button;
