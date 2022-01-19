import getDocumentElement from '@popperjs/core/lib/dom-utils/getDocumentElement';
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
                  <th>#</th>
                  {ListaDatos.map((item) => (
                    <th key={item.id}>{item.heding}</th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {ListaDatos.map((item) => {
                  return (
                    <tr onClick={this.juegoClick(item.id)}>
                      <td>{item.id}</td>
                      <td>{item.cell1}</td>
                      <td>{item.cell2}</td>
                      <td>{item.cell3}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
          <Col>
            <Card>
              <Card.Header>{this.state.idJuego}</Card.Header>
              <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
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
