import React from 'react'
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Add from '../components/Add.jsx';

function Dashboard() {
  return (
    <div>
      <Row className='p-5'>
        <Col>
          <img 
            src="https://cdni.iconscout.com/illustration/premium/thumb/employees-welcoming-new-employee-in-office-3611327-3022087.png" 
            alt="Employees welcoming new employee" 
          />
        </Col>
        <Col>
          <h3 className='text-center my-3'>Employee Details</h3>
          <Add/>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Id</th>
                <th>Username</th>
                <th>Age</th>
                <th>Title</th>
                <th>Position</th>
                <th>Salary</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>26</td>
                <td>Junior</td>
                <td>React Developer</td>
                <td>56000</td>
                <td>
                  delete
                  edit
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  )
}

export default Dashboard