import React from 'react';
import Table from 'react-bootstrap/Table';

function SzczepowiTableComponent() {
  return (
    <Table striped bordered>
      <thead>
        <tr>
          <th>2023 - dzisiaj</th>
          <th>Bartłomiej Rój Phm.</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>2008 - 2023</td>
          <td>Tadeusz Dan Phm.</td>
        </tr>
        <tr>
          <td>1993 - 2007</td>
          <td>Jan Minor Hm.</td>
        </tr>
        <tr>
          <td>1987 - 1993</td>
          <td>Bogdan Jodła Hrp.</td>
        </tr>
        <tr>
          <td>1982 - 1985</td>
          <td>Jan Czerniawski Pwd.</td>
        </tr>
        <tr>
          <td>1974 - 1982</td>
          <td>Ignacy Płonka Hm.</td>
        </tr>
        <tr>
          <td>1973 - 1974</td>
          <td>Bogdan Trzeciecki Hm.</td>
        </tr>
        <tr>
          <td>1970 - 1973</td>
          <td>Bogusław Kucharek Pwd.</td>
        </tr>
        <tr>
          <td>1964 - 1970</td>
          <td>Marian Scicinski Hm.</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default SzczepowiTableComponent;
