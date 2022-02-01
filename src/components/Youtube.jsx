import React from 'react';
import { Table } from 'react-bootstrap';
import { Container, Row, Card } from 'react-bootstrap';
import { forEach, map } from 'react-bootstrap/cjs/ElementChildren';
import Col from 'react-bootstrap/esm/Col';

class Youtube extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: '',
      tableData: [],
    };
  }

  async componentDidMount() {
    const response = await fetch(
      'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PL-1kkq9SiUJSr7xWz4TZOLuIfPX2pIpYD&maxResults=50&key=AIzaSyDryClbYWSAoyH9_Fd9iCN0hqUdbSlq92M'
    );
    const responseData = await response.json();

    console.log('asdasd', responseData.items);

    this.setState({
      tableData: responseData,
      selectedItem: responseData[0],
    });
    console.log('bb', this.state.tableData);
  }

  render() {
    console.log('after', this.state.tableData.items);
    const a = this.state.tableData.items;
    if (this.state.tableData.items !== null) {
      console.log('after2', this.state.tableData.items);
      return (
        <Container>
          <h1>Mis lista de reproducción</h1>
          <Row>
            <Col>
              <Table responsive>
                <thead>
                  <tr>
                    <th>Titulo</th>
                    <th>Canal</th>
                    <th>Fecha subida</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.tableData.items.map((item) => {
                    return (
                      <tr onClick={}>
                        <td>{item.snippet.title}</td>
                        <td>{item.snippet.publishedAt}</td>
                        <td>{item.channel}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Img variant="top" />
                  <Card.Title></Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      );
    } else {
      console.log('after3', this.state.tableData.items);
      return (
        <Container>
          <h1>Cargando...</h1>
        </Container>
      );
    }
  }
}

export default Youtube;
