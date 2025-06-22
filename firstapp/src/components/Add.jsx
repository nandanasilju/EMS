import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { addEmployeeAPI, updateEmployeeAPI } from '../services/allAPI';

function Add({ refresh, editData, setEditData }) {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setEditData(null); // Clear edit data
    clearForm(); // Clear form inputs
  };

  const handleShow = () => {
    clearForm(); // Clear form before showing modal for Add
    setShow(true);
  };

  const [id, setId] = useState("");
  const [empname, setEmpname] = useState("");
  const [age, setAge] = useState("");
  const [title, setTitle] = useState("");
  const [position, setPosition] = useState("");
  const [salary, setSalary] = useState("");

  // Pre-fill the form in Edit mode
  useEffect(() => {
    if (editData) {
      setId(editData.id);
      setEmpname(editData.empname);
      setAge(editData.age);
      setTitle(editData.title);
      setPosition(editData.position);
      setSalary(editData.salary);
      setShow(true);
    }
  }, [editData]);

  // Function to clear form fields
  const clearForm = () => {
    setId("");
    setEmpname("");
    setAge("");
    setTitle("");
    setPosition("");
    setSalary("");
  };

  const handleAddOrUpdate = async () => {
    const body = { id, empname, age, title, position, salary };

    try {
      if (editData) {
        // Update employee
        const result = await updateEmployeeAPI(body);
        alert(result.data.message);
      } else {
        // Add new employee
        const result = await addEmployeeAPI(body);
        alert(result.data.message);
      }

      handleClose();
      refresh(); // Refresh the employee list

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <button onClick={handleShow} style={{ float: 'right' }} className='btn btn-success my-4'>
        Add
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{editData ? 'Edit Employee' : 'Add Employee'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            value={id}
            onChange={e => setId(e.target.value)}
            type="text"
            placeholder="Employee Id"
            disabled={editData ? true : false}
          />
          <br />
          <Form.Control
            value={empname}
            onChange={e => setEmpname(e.target.value)}
            type="text"
            placeholder="Employee Name"
          />
          <br />
          <Form.Control
            value={age}
            onChange={e => setAge(e.target.value)}
            type="text"
            placeholder="Employee Age"
          />
          <br />
          <Form.Control
            value={title}
            onChange={e => setTitle(e.target.value)}
            type="text"
            placeholder="Title"
          />
          <br />
          <Form.Control
            value={position}
            onChange={e => setPosition(e.target.value)}
            type="text"
            placeholder="Position"
          />
          <br />
          <Form.Control
            value={salary}
            onChange={e => setSalary(e.target.value)}
            type="text"
            placeholder="Salary"
          />
          <br />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleAddOrUpdate} variant="primary">
            {editData ? 'Update' : 'Save Changes'}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Add;
