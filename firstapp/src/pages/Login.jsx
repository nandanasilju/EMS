import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {
    const [user, setUser] = useState({ email: "", password: "" });
    console.log(user);

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault(); // ✅ Prevent page reload
        const storedUser = JSON.parse(sessionStorage.getItem("userDetails"));
        if (storedUser && storedUser.email === user.email && storedUser.password === user.password) {
            alert("Login Successful");
            navigate('/dashboard');
        } else {
            alert("Incorrect Details");
        }
    }

    return (
        <div>
            <Row className='p-5'>
                <Col>
                    <img src="https://cdni.iconscout.com/illustration/premium/thumb/login-illustration-download-in-svg-png-gif-file-formats--select-an-account-join-the-forum-password-digital-marketing-pack-business-illustrations-8333958.png" alt="" />
                </Col>
                <Col className='p-5'>
                    <h2 className='text-center mt-5'>Login Here...</h2>
                    <Form onSubmit={handleLogin}> {/* ✅ Corrected form submission */}
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
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </div>
                    </Form>

                    <p>New here? Please Register</p>
                    <Link to={'/register'}>
                        <p className='Link btn-primary'>Register Now</p>
                    </Link>
                </Col>
            </Row>
        </div>
    )
}

export default Login;
