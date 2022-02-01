import React from 'react';
import { Table } from 'react-bootstrap';
import { Container, Row, Card } from 'react-bootstrap';
import { forEach, map } from 'react-bootstrap/cjs/ElementChildren';
import Col from 'react-bootstrap/esm/Col';

class Youtube extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: 0,
      tableData: [],
      title: '',
      imagenUrl: '',
      descipcion: '',
    };
    this.videoClick = this.videoClick.bind(this);
  }

  async componentDidMount() {
    const response = await fetch(
      'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=PL-1kkq9SiUJSr7xWz4TZOLuIfPX2pIpYD&maxResults=50&key=AIzaSyDryClbYWSAoyH9_Fd9iCN0hqUdbSlq92M'
    );
    const responseData = await response.json();

    this.setState({
      tableData: responseData.items,
      imagenUrl:
        responseData.items[this.state.selectedItem].snippet.thumbnails.high.url,
      title: responseData.items[this.state.selectedItem].snippet.title,
      descipcion:
        responseData.items[this.state.selectedItem].snippet.description,
    });
  }

  videoClick(item) {
    console.log('i', item);

    const data = this.state.tableData;

    this.setState({
      imagenUrl: data[item].snippet.thumbnails.high.url,
      title: data[item].snippet.title,
      descipcion: data[item].snippet.description,
    });
  }

  render() {
    if (this.state.tableData.items !== null) {
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
                  {this.state.tableData.map((item, index) => {
                    return (
                      <tr onClick={() => this.videoClick(index)}>
                        <td>{item.snippet.title}</td>
                        <td>{item.snippet.channelTitle}</td>
                        <td>{item.snippet.publishedAt}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Img variant="top" src={this.state.imagenUrl} />
                  <Card.Title>{this.state.title}</Card.Title>
                  <Card.Text>{this.state.descipcion}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      );
    } else {
      return (
        <Container>
          <h1>Cargando...</h1>
        </Container>
      );
    }
  }
}

export default Youtube;
