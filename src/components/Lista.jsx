import React from 'react';
import { LineaLista } from './LineaLista';

export function Lista(props) {
  const listaComp = [];

  for (let i = 0; i < props.elementos.length; i++) {
    listaComp.push(<LineaLista titulo={props.elementos[i]} />);
  }

  return (
    <div>
      {props.nombre}
      <ul>{listaComp}</ul>
    </div>
  );
}
