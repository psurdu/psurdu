import React from 'react';
import {LineaLista} from './LineaLista'; 

export function CheckBox() {
  return (
    <input type="CheckBox" onChange="cambiarEstilo(this)" />
  );
}
