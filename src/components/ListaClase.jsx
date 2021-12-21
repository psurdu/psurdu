import React, { useState, useRef } from 'react';
import ComponenteListaClase from './ComponenteListaClase';

class ListaClase extends React.Component {
  constructor(props) {
    super(props);
    this.listaInicial = [];
    this.listaComponentes = [];
    this.valorTextInput = React.createRef();
    this.seleccion = React.createRef();
    this.state = {
      listaComponentes: this.listaInicial,
    };
  }

  Lista() {
    if (this.props.elementos !== undefined) {
      for (let i = 0; i < this.props.elementos.length; i++) {
        this.listaInicial.push(
          <ComponenteListaClase
            done={this.props.elementos[i].done}
            texto={this.props.elementos[i].texto}
            prioridad={this.props.elementos[i].prioridad}
          />
        );
      }
    }
  }

  addElement() {
    const newLista = this.state.listaComponentes.concat(
      <ComponenteListaClase
        texto={this.valorTextInput.current.value}
        prioridad={this.seleccion.current.value}
      />
    );
    this.setState({ listaComponentes: newLista });
  }

  render() {
    this.Lista();
    return (
      <div>
        {this.props.titulo} - {this.props.icono}
        <ul>
          {this.state.listaComponentes}
          <li>
            <input
              ref={this.valorTextInput}
              type="text"
              placeholder="Introduce una tarea"
            />
            <button onClick={this.addElement.bind(this)}>Añadir</button>
            <select ref={this.seleccion}>
              <option value="baja">baja</option>
              <option value="media">media</option>
              <option value="alta">alta</option>
            </select>
          </li>
        </ul>
      </div>
    );
  }
}

export default ListaClase;
