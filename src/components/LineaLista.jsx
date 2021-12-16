import React from 'react';
import { CheckBox } from './CheckBox.jsx';

export class LineaLista extends React.Component{

  constructor(props){
    super(props);
    this.titulo=props.titulo;
    this.className=props.className;
  }

  function LineaLista(props) {
      return (
        <li className="unchecked">
          <CheckBox />
          {props.titulo}
        </li>
      );
  }
}
