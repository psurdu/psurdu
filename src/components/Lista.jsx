import React from 'react';
import { LineaLista } from './LineaLista';

export function Lista(props) {
  return (
    <div>
      {props.nombre}
      <ul>
        <LineaLista titulo="t1" />
        <LineaLista titulo="t2" />
        <LineaLista titulo="t3" />
      </ul>
    </div>
  );
}
