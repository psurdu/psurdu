import React from 'react';

import ListaClase from './components/ListaClase';
import Header from './components/Header.jsx';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Home } from './components/Home';

export function App() {
  const elementos1 = [
    { done: false, texto: 'Elemento (Comp 1)', prioridad: 'alta' },
    { done: true, texto: 'Elemento (Comp 2)', prioridad: 'media' },
  ];
  const elementos2 = [
    { done: false, texto: 'Elemento (Comp 3)' },
    { done: true, texto: 'Elemento (Comp 4)' },
    { done: false, texto: 'Elemento (Comp 5)' },
  ];
  const elementos3 = [{ done: false, texto: 'Elemento (Comp 6)' }];

  return (
    <div>
      <Router>
        <Route path="/" component={Home} />
        <Header />
      </Router>
      <h1>Listas de tareas</h1>
      <ListaClase titulo="Tareas de la casa" icono="♥" elementos={elementos1} />
      <ListaClase
        titulo="Lista de la compra"
        icono="✌"
        elementos={elementos2}
      />
      <ListaClase titulo="ToDos del curso" icono="🙌" elementos={elementos3} />
    </div>
  );
}
