import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { addEmployeeAPI, updateEmployeeAPI } from '../services/allAPI';

function Add({ refresh, editData, setEditData }) {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setEditData(null);
    clearForm();
  };

  const handleShow = () => {
    clearForm();
    setShow(true);
  };

  const [id, setId] = useState("");
  const [empname, setEmpname] = useState("");
  const [age, setAge] = useState("");
  const [title, setTitle] = useState("");
  const [position, setPosition] = useState("");
  const [salary, setSalary] = useState("");

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
        const result = await updateEmployeeAPI(body);
        alert(result.data.message);
      } else {
        const result = await addEmployeeAPI(body);
        alert(result.data.message);
      }

      handleClose();
      refresh();

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div className='text-end'>
        <button
          onClick={handleShow}
          className='btn btn-lg'
          style={{
            backgroundColor: '#FF6F61',
            border: 'none',
            color: 'white',
            padding: '10px 30px',
            borderRadius: '30px',
            fontWeight: '600',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={e => e.target.style.backgroundColor = '#FF4C4C'}
          onMouseOut={e => e.target.style.backgroundColor = '#FF6F61'}
        >
          Add Employee
        </button>
      </div>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton style={{ backgroundColor: '#FF6F61', color: 'white' }}>
          <Modal.Title>{editData ? 'Edit Employee' : 'Add New Employee'}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ fontFamily: 'Poppins, sans-serif' }}>
          <Form.Group className="mb-3">
            <Form.Control
              value={id}
              onChange={e => setId(e.target.value)}
              type="text"
              placeholder="Employee ID"
              disabled={editData ? true : false}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              value={empname}
              onChange={e => setEmpname(e.target.value)}
              type="text"
              placeholder="Employee Name"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              value={age}
              onChange={e => setAge(e.target.value)}
              type="text"
              placeholder="Employee Age"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              value={title}
              onChange={e => setTitle(e.target.value)}
              type="text"
              placeholder="Title"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              value={position}
              onChange={e => setPosition(e.target.value)}
              type="text"
              placeholder="Position"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Control
              value={salary}
              onChange={e => setSalary(e.target.value)}
              type="text"
              placeholder="Salary"
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={handleAddOrUpdate}
            style={{
              backgroundColor: '#FF6F61',
              border: 'none',
              fontWeight: '600',
              padding: '8px 25px'
            }}
            onMouseOver={e => e.target.style.backgroundColor = '#FF4C4C'}
            onMouseOut={e => e.target.style.backgroundColor = '#FF6F61'}
          >
            {editData ? 'Update' : 'Save'}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Add;
