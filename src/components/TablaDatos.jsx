import React from 'react';
import { Table } from 'react-bootstrap';
import { ListaDatos } from '../data/ListaDatos.js';

class TablaDatos extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
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
          <tr>
            <td>1</td>
            {ListaDatos.map((item) => (
              <td key={item.id}>{item.cell1}</td>
            ))}
          </tr>
          <tr>
            <td>2</td>
            {ListaDatos.map((item) => (
              <td key={item.id}>{item.cell2}</td>
            ))}
          </tr>
          <tr>
            <td>3</td>
            {ListaDatos.map((item) => (
              <td key={item.id}>{item.cell3}</td>
            ))}
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default TablaDatos;
