import React from 'react';
import './style.css';
import { Lista } from './components/Lista.jsx';
import { LineaLista } from './components/LineaLista.jsx';

export default function App() {
  return (
    <div>
      <h1>Primer componente</h1>
      <Lista nombre="Hola" />
    </div>
  );
}
