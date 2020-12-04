import React from 'react';
import ReactDOM from 'react-dom';
import ParentWithPrimitive from './withPrimitive/Parent';
import ParentWithObject from './withObject/Parent';
import ParentWithArray from './withArray/Parent';
import ParentOfFunctional from './withFunctionalChild/Parent';

ReactDOM.render(
  <ParentOfFunctional />,
  document.getElementById('root')
);

