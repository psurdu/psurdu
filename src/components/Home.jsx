import React from 'react';

import { Container, Form, Button } from 'react-bootstrap';
import { UserData } from '../data/UserData';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = { user: '', password: '', id: '' };

    this.login = this.login.bind(this);

    this.nombre = React.createRef();
    this.pass = React.createRef();
    this.check = React.createRef();
  }

  login() {
    this.setState({
      user: this.nombre.current.value,
      password: this.pass.current.value,
    });
  }

  componentWillUnmount() {
    {
      {
        UserData.map((item) => {
          if (
            item.email === this.state.user &&
            item.pass === this.state.password
          ) {
            localStorage.setItem('id', item.id);
          }
        });
      }
    }
  }

  componentDidMount() {
    this.setState({
      id: localStorage.getItem('id'),
    });
  }

  render() {
    if (localStorage.getItem('id') !== null) {
      return (
        <div className="main-site">
          <h1>Bienvenido {UserData[localStorage.getItem('id')].nombre}</h1>
        </div>
      );
    } else {
      return (
        <div className="main-site">
          <h1>Bienvenido!</h1>
          <Container>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo electronico</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  ref={this.nombre}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  ref={this.pass}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Recordarme"
                  ref={this.check}
                />
              </Form.Group>
              <Button variant="primary" type="button" onClick={this.login}>
                Login
              </Button>
            </Form>
          </Container>
        </div>
      );
    }
  }
}

export default Home;
