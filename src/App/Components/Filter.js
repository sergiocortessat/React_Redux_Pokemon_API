/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { TextField } from '@material-ui/core';
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
    <div className="types-filter">
      {types.map((type) => (
        <Button key={type.color} type={type} handleClick={handleClick} />
      ))}

    </div>
  </>
);

export default Filter;
