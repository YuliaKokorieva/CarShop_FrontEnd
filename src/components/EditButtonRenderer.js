import React from 'react';
import Editcar from './Editcar';

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const cellValue = props.valueFormatted ? props.valueFormatted : props.value;

  return (
    <div>
      <Editcar updateCar = {props.updateCar} link={cellValue}/> 
    </div>
  );
};