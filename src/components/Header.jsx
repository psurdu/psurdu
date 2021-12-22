import React from 'react';

import './header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <div>
          <nav>
            <ul>
              <select>
                <option value="O1">O1</option>
                <option value="O2">O2</option>
                <option value="O3">O3</option>
              </select>
              <li>Inicio</li>
              <li>Compra</li>
              <li>
                <button class="botonLogin">Login</button>
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
