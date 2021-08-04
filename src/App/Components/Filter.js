/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { TextField } from '@material-ui/core';
import { types } from '../../staticData';

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
    <div className="types-filter">
      {types.map((type) => (
        <button type="button" key={type.name} className="type-filter-item" onClick={(e) => handleClick(e.target.innerText)}>{type.name}</button>
      ))}

    </div>
  </>
);

export default Filter;
