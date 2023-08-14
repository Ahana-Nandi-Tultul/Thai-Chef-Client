import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import './Register.css';
import { Link } from 'react-router-dom';


const Register = () => {
    const handleRegister = event => {
        event.preventDefault();

    }
    return (
        <Container style={{marginTop: "100px"}}>
            <h2 className='display-5 fw-bold text-center mb-5'>Please Register!!!</h2>
            <Form className='register' onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail2">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name="photo" placeholder="Enter Photo URL" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button className='w-100' variant="success" type="submit">
                    Register
                </Button>
                <Form.Text className="text-muted mt-4">
                    Already Have an Account? Please <Link to="/login" className='text-primary
                     text-decoration-none'>Login</Link>
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;