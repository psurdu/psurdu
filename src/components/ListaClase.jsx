import React, { useState, useRef } from 'react';
import ComponenteListaClase from './ComponenteListaClase';

class ListaClase extends React.Component {
  constructor(props) {
    super(props);
    this.nombre=props.nombre;
    
  }

  Lista() {
    const listaInicial = [];
    if (props.elementos !== undefined) {
      for (let i = 0; i < props.elementos.length; i++) {
        listaInicial.push(
          <ComponenteListaClase
            done={props.elementos[i].done}
            texto={props.elementos[i].texto}
            prioridad={props.elementos[i].prioridad}
          />
        );
      }

      const [listaComponentes, setListaComponentes] = useState(listaInicial);
      const valorTextInput = useRef();
      const seleccion = useRef();
    }
  }

  addElement() {
    const newLista = listaComponentes.concat(
      <ComponenteListaClase
        texto={valorTextInput.current.value}
        prioridad={seleccion.current.value}
      />
    );
    setListaComponentes(newLista);
  }

  render() {
    return (
      <div>
        {props.titulo} - {props.icono}
        <ul>
          {listaComponentes}
          <li>
            <input
              ref={valorTextInput}
              type="text"
              placeholder="Introduce una tarea"
            />
            <button onClick={funcion}>Añadir</button>
            <select ref={seleccion}>
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

export ListaClase;
