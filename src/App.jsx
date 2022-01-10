import React from 'react';

import Header from './components/Header.jsx';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Home } from './components/Home';
import { Perfil } from './components/Perfil';
import { Tareas } from './components/Tareas';
import { Login } from './components/Login';

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
        <Header />
        <Route path="/tareas" exact component={Tareas} />
        <Route path="/home" exact component={Home} />
        <Route path="/perfil" exact component={Perfil} />
        <Route path="/login" exact component={Login} />
      </Router>
    </div>
  );
}
