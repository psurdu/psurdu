import React from 'react';

import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserData } from '../data/UserData';

class Perfil extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      avatar: '',
      nombre: '',
      email: '',
      apellido: '',
    };
  }

  componentDidMount() {
    if (localStorage.getItem('id') !== null) {
      this.setState({
        avatar: UserData[localStorage.getItem('id')].avatar,
        nombre: UserData[localStorage.getItem('id')].nombre,
        email: UserData[localStorage.getItem('id')].email,
        apellido: UserData[localStorage.getItem('id')].apellido,
      });
    }
  }

  logout() {
    localStorage.clear(this);
  }

  render() {
    if (localStorage.getItem('id') !== null) {
      return (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={this.state.avatar} />
          <Card.Body>
            <Card.Title>
              <h1>{this.state.nombre}</h1>
            </Card.Title>
            <Card.Text>
              <h3>Correo: {this.state.email}</h3>
              <h3>Nombre: {this.state.nombre}</h3>
              <h3>Apellido: {this.state.apellido}</h3>
            </Card.Text>
            <Link to="/Home" onClick={this.logout}>
              <Button variant="primary">Cerrar Sesión</Button>
            </Link>
          </Card.Body>
        </Card>
      );
    } else {
      return (
        <>
          <h3>Para poder ver los datos del perfíl tienes que iniciar sesión</h3>
          <h1>correo: admin@gmail.es password: admin (copialas)</h1>
        </>
      );
    }
  }
}

export default Perfil;
