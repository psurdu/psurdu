import React from 'react';
import './style.css';
import { ListaClase } from './components/ListaClase.jsx';

export default function App() {
  const elementos = ['hola', 'hola2', 'hola3'];

  return (
    <div>
      <h1>Primer componente</h1>
      <ListaClase nombre="Hola" elementos={elementos} />
    </div>
  );
}
