import React from 'react';
import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import { types } from '../../staticData';
import Button from './Button';
import '../../Styles/Filter.scss';

const Filter = ({
  handleInput, handleClick, setInputFilter, inputFilter,
}) => (
  <>
    <TextField
      className="textField"
      onClick={() => setInputFilter('')}
      onChange={(e) => handleInput(e)}
      variant="filled"
      value={inputFilter}
      label="Pokemon Name: "
    />
    <div className="types-filter" data-testid="filter">
      {types.map((type) => (
        <Button key={type.color} type={type} handleClick={handleClick} />
      ))}

    </div>
  </>
);
// default props
Filter.defaultProps = {
  handleInput: () => {},
  handleClick: () => {},
  setInputFilter: () => {},
  inputFilter: '',
};

Filter.propTypes = {
  handleInput: PropTypes.func,
  handleClick: PropTypes.func,
  setInputFilter: PropTypes.func,
  inputFilter: PropTypes.string,
};

export default Filter;
