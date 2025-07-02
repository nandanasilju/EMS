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
          getEmployees();
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
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #FFF9F9 0%, #ECF2FF 100%)',
      padding: '60px 30px'
    }}>
      <Row className='justify-content-center' style={{ maxWidth: '100%', margin: '0 auto' }}>

        {/* Left Side Image - Bigger */}
        <Col md={6} className='text-center p-4'>
          <img
            src="https://img.freepik.com/free-vector/business-team-discussing-ideas-startup_74855-4380.jpg?t=st=1719072426~exp=1719073026~hmac=099adcc859af4a26767cf3ec92887b6ee76110e3fda8d17e7fa13839934a05d8&w=740"
            alt="Employee Dashboard"
            style={{
              width: '90%',
              height: 'auto',
              borderRadius: '25px',
              boxShadow: '0 6px 30px rgba(0,0,0,0.15)'
            }}
          />
        </Col>

        {/* Right Side Content - Full width */}
        <Col md={6} className='p-4' style={{ width: '100%' }}>
          <h2 className='text-center mb-4' style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: '700',
            fontSize: '3rem',
            color: '#333333'
          }}>
            Employee Details
          </h2>

          <Add refresh={getEmployees} editData={editData} setEditData={setEditData} />

          <div className='mt-5' style={{ overflowX: 'auto', maxWidth: '100%' }}>
            <Table striped bordered hover className='rounded' style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.1rem', minWidth: '800px' }}>
              <thead style={{ backgroundColor: '#FF6F61', color: 'white' }}>
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
                      
                      <button
                        onClick={() => setEditData(item)}
                        className='btn btn-warning btn-sm'
                        style={{ borderRadius: '20px', padding: '6px 18px', color: 'white' }}
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
