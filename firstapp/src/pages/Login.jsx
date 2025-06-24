import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {
    const [user, setUser] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const storedUser = JSON.parse(localStorage.getItem("userDetails"));
        if (storedUser && storedUser.email === user.email && storedUser.password === user.password) {
            alert("Login Successful");
            navigate('/dashboard');
        } else {
            alert("Incorrect Details");
        }
    }

    return (
        <div style={{
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #FFF9F9 0%, #ECF2FF 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '50px 20px'
        }}>
            <Row className='align-items-center justify-content-center shadow p-4 rounded' style={{ maxWidth: '1200px', width: '100%', backgroundColor: '#FFFFFF' }}>

                {/* Left Side Image */}
                <Col md={6} className='text-center p-4'>
                    <img
                        src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg?w=740&t=st=1719064071~exp=1719064671~hmac=9a7c947d216d650c8e4bcf4f7f944468c592df0133cde5410a0fb87b3e3e10e1"
                        alt="Login Illustration"
                        style={{ maxWidth: '100%', borderRadius: '15px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
                    />
                </Col>

                {/* Right Side Form */}
                <Col md={6} className='p-4'>
                    <h2 className='text-center mb-4' style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '700', color: '#333333' }}>Login Here</h2>

                    <Form onSubmit={handleLogin}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label style={{ fontFamily: 'Poppins, sans-serif' }}>Email address</Form.Label>
                            <Form.Control onChange={e => setUser({ ...user, email: e.target.value })} type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label style={{ fontFamily: 'Poppins, sans-serif' }}>Password</Form.Label>
                            <Form.Control onChange={e => setUser({ ...user, password: e.target.value })} type="password" placeholder="Password" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember Me" />
                        </Form.Group>

                        <div className='text-center'>
                            <Button
                                variant="primary"
                                type="submit"
                                style={{
                                    backgroundColor: '#FF6F61',
                                    border: 'none',
                                    padding: '10px 30px',
                                    borderRadius: '30px',
                                    fontFamily: 'Poppins, sans-serif',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseOver={e => e.target.style.backgroundColor = '#FF4C4C'}
                                onMouseOut={e => e.target.style.backgroundColor = '#FF6F61'}
                            >
                                Submit
                            </Button>
                        </div>
                    </Form>

                    <div className='text-center mt-3'>
                        <p style={{ fontFamily: 'Poppins, sans-serif' }}>New here? <Link to='/register' style={{ color: '#FF6F61', textDecoration: 'none' }}>Register Now</Link></p>
                    </div>
                </Col>

            </Row>
        </div>
    )
}

export default Login;
