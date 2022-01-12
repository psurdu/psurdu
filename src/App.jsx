import React from 'react';

import Header from './components/Header.jsx';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Home } from './components/Home';
import { Perfil } from './components/Perfil';
import { Tareas } from './components/Tareas';
import { Login } from './components/Login';
import { MenuItems } from './data/MenuItems.js';

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
        {MenuItems.map((item) => {
          return (
            <Route
              key={item.id}
              path={item.path}
              exact
              component={item.component}
            />
          );
        })}
        <Route path="/login" exact component={Login} />
      </Router>
    </div>
  );
}
