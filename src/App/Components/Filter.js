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
    <div className="types-filter" data-testid="types-filter">
      {types.map((type) => (
        <Button key={type.color} type={type} handleClick={handleClick} />
      ))}

    </div>
  </>
);

Filter.propTypes = {
  handleInput: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  setInputFilter: PropTypes.func.isRequired,
  inputFilter: PropTypes.string.isRequired,
};

export default Filter;
