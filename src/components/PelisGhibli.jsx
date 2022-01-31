import React from 'react';
import { Table } from 'react-bootstrap';
import { Container, Row, Card } from 'react-bootstrap';
import Col from 'react-bootstrap/esm/Col';

class PelisGhibli extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: '',
      tableData: [],
    };
  }

  async componentDidMount() {
    const response = await fetch('https://ghibliapi.herokuapp.com/films');
    const responseData = await response.json();
    this.setState({
      tableData: responseData,
      selectedItem: responseData[0],
    });
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Table responsive>
              <thead>
                <tr>
                  <th>Titulo</th>
                  <th>Director</th>
                  <th>Año</th>
                  <th>Puntuación</th>
                </tr>
              </thead>

              <tbody>
                {this.state.tableData.map((item) => {
                  return (
                    <tr>
                      <td>{item.title}</td>
                      <td>{item.director}</td>
                      <td>{item.release_date}</td>
                      <td>{item.rt_score}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Img
                  variant="top"
                  src={this.state.selectedItem.movie_banner}
                />
                <Card.Title>{this.state.selectedItem.title}</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default PelisGhibli;
