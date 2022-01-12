import React from 'react';

import './header.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { MenuItems } from '../data/MenuItems';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  /*createMenuLinks() {
    const listComponents = [];

    for (let i = 0; i < MenuItems.length; i++) {
      listComponents.push(
        <li>
          <Link to={MenuItems[i].path}>{MenuItems[i].title}</Link>
        </li>
      );
    }
    return listComponents;

    return <div />;
  }*/

  render() {
    return (
      <header class="cabecera">
        <div>
          <nav>
            <ul>
              {MenuItems.map((item) => {
                return (
                  <li key={item.id}>
                    <Link to={item.path}>{item.title}</Link>
                  </li>
                );
              })}
              {/*this.createMenuLinks()*/}
              <li>
                <Link to="/login">
                  <button class="botonLogin">Login</button>
                </Link>
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
