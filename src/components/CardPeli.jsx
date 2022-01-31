import React from 'react';
import { Card } from 'react-bootstrap';

class CardPeli extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
    };
  }

  render() {
    <Card>
      <Card.Header></Card.Header>
      <Card.Body>
        <Card.Title>{this.props.data.title}</Card.Title>
        <Card.Text></Card.Text>
      </Card.Body>
    </Card>;
  }
}

export default CardPeli;
