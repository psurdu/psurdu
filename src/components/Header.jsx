import React from 'react';

import './header.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header class="cabecera">
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/perfil">Perfil</Link>
              </li>
              <li>
                <Link to="/tareas">Tareas</Link>
              </li>
              <li>
                <button class="botonLogin">
                  <Link to="/login">Login</Link>
                </button>
              </li>
              <li>
                <button class="botonSingIn">Sing In</button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
