import React from 'react'

import classes from './Input.module.css';

const Input = (props) => {
  return(
  <input type={props.type} id={props.id} required={!!props.required} placeholder={props.placeholder} />
  );
};

export default Input;

