import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Register() {

  const [user, setUser] = useState({ username: "", email: "", password: "" });
  console.log(user);

  const navigate = useNavigate(); // ✅ Fixed

  const handleRegister = (e) => {
    e.preventDefault(); // ✅ Prevent page reload
    sessionStorage.setItem("userDetails", JSON.stringify(user));
    alert("User Registered Successfully");
    navigate('/login');
  }

  return (
    <div>
      <Row className='p-5'>
        <Col>
          <img src="https://cdni.iconscout.com/illustration/premium/thumb/login-illustration-download-in-svg-png-gif-file-formats--select-an-account-join-the-forum-password-digital-marketing-pack-business-illustrations-8333958.png" alt="" />
        </Col>
        <Col className='p-5'>
          <h2 className='text-center mt-5'>Register Here...</h2>
          <Form onSubmit={handleRegister}> {/* ✅ Correct place to handle submit */}
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>User name</Form.Label>
              <Form.Control onChange={e => setUser({ ...user, username: e.target.value })} type="text" placeholder="Enter Username" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control onChange={e => setUser({ ...user, email: e.target.value })} type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control onChange={e => setUser({ ...user, password: e.target.value })} type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <div className='text-center'>
              <Button variant="primary" type="submit"> {/* ✅ Correct button type */}
                Submit
              </Button>
            </div>
          </Form>

          <p>Already a member ?</p>
          <Link to={'/login'}>
            <p className='Link btn-primary'>Login Now</p>
          </Link>
        </Col>
      </Row>
    </div>
  )
}

export default Register;
