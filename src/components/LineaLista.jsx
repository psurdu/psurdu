import React from 'react';
import { CheckBox } from './CheckBox.jsx';

export function LineaLista(props) {
  return (
    <li className="unchecked">
      <CheckBox />
      {props.titulo}
    </li>
  );
}
