import React from 'react';
import { Table } from 'react-bootstrap';
import { Container, Row, Card } from 'react-bootstrap';
import Col from 'react-bootstrap/esm/Col';
import { ListaDatos } from '../data/ListaDatos.js';

class TablaDatos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idJuego: 1,
    };

    this.juegoClick = this.juegoClick.bind(this);
  }

  juegoClick(i) {
    this.setState({ idJuego: i });
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Table responsive>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Popularidad</th>
                  <th>Precio</th>
                  <th>Calidad</th>
                </tr>
              </thead>

              <tbody>
                {ListaDatos.map((item) => {
                  return (
                    <tr onClick={() => this.juegoClick(item.id - 1)}>
                      <td>{item.nombre}</td>
                      <td>{item.popularidad}</td>
                      <td>{item.precio}</td>
                      <td>{item.calidad}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
          <Col>
            <Card>
              <Card.Header>
                <img src={ListaDatos[this.state.idJuego].imagen} />
              </Card.Header>
              <Card.Body>
                <Card.Title>{ListaDatos[this.state.idJuego].nombre}</Card.Title>
                <Card.Text>
                  {ListaDatos[this.state.idJuego].descripcion}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default TablaDatos;
