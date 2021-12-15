import React from 'react';
import './style.css';
import { Lista } from './components/Lista.jsx';
import { LineaLista } from './components/LineaLista.jsx';

export default function App() {
  const elementos = ['hola', 'hola2', 'hola3'];

  return (
    <div>
      <h1>Primer componente</h1>
      <Lista nombre="Hola" elementos={elementos} />
      <Lista nombre="Xd" elementos={elementos} />
    </div>
  );
}
