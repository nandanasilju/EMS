import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Add from '../components/Add';
import { getAllEmployeesAPI, deleteEmployeeAPI } from '../services/allAPI';

function Dashboard() {
  const [employee, setEmployee] = useState([]);
  const [editData, setEditData] = useState(null);

  const getEmployees = async () => {
    const result = await getAllEmployeesAPI();
    setEmployee(result.data.employees);
  };

  useEffect(() => {
    getEmployees();
  }, []);

  
const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this employee?')) {
        try {
            const headers = { "Content-Type": "application/json" };
            const result = await deleteEmployeeAPI(id, headers);

            if (result?.data?.statusCode === 200) {
                alert(result.data.message);
                getEmployees(); // Refresh table
            } else {
                alert(result?.data?.message || "Failed to delete employee");
            }
        } catch (error) {
            console.error("Delete error:", error);
            alert("Error deleting employee. Please try again.");
        }
    }
};




  return (
    <div>
      <Row className='p-5'>
        <Col>
          <img src="https://cdni.iconscout.com/illustration/premium/thumb/employees-welcoming-new-employee-in-office-3611327-3022087.png" alt="" />
        </Col>
        <Col>
          <h3 className='text-center my-3'>Employee Details</h3>
          <Add refresh={getEmployees} editData={editData} setEditData={setEditData} />
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
              {employee.map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.empname}</td>
                  <td>{item.age}</td>
                  <td>{item.title}</td>
                  <td>{item.position}</td>
                  <td>{item.salary}</td>
                  <td>
                    <button onClick={() => handleDelete(item.id)} className='btn btn-danger btn-sm me-2'>Delete</button>
                    <button onClick={() => setEditData(item)} className='btn btn-warning btn-sm'>Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
